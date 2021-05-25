/*global chrome*/
import { createStore, createHook } from 'react-sweet-state'
const initialState = {
  title: '',
  desc: '',
  id: '',
  isTooLong: false,
}
const Store = createStore({
  initialState,
  actions: {
    fetchArticle:
      () =>
      async ({ setState, getState }) => {
        //loading
        setState(initialState)

        //local storage section
        const keyShown = 'allTimeShown'
        const keyOpen = 'allTimeOpened'
        let counterAllTimeOpen = 0
        let counterAllTimeShown = 1
        let isFound = false

        chrome.storage.sync.get([keyShown, keyOpen], async res => {
          counterAllTimeOpen = res[keyOpen] || 0
          if (keyShown in res) {
            counterAllTimeShown = res[keyShown]
            isFound = true
          }

          if (isFound)
            chrome.storage.sync.set({ [keyShown]: counterAllTimeShown + 1 })
          else {
            chrome.storage.sync.set({ [keyShown]: 2 })
          }

          //fetch data section
          const url =
            'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts&grnlimit=1&explaintext=&exintro'
          let resp = await fetch(url)
          resp = await resp.json()

          const response = { ...resp }
          const id = Object.keys(response.query.pages)[0]
          const title = response.query.pages[id].title
          let desc = response.query.pages[id].extract
          let isTooLong = false

          if (desc.length >= 252) {
            desc = desc.substring(0, 250)
            isTooLong = true
          }
          setState({
            id,
            title,
            desc,
            isTooLong,
            [keyShown]: counterAllTimeShown,
            [keyOpen]: counterAllTimeOpen,
          })
        })
      },
    incrementOpen:
      () =>
      ({ setState, getState }) => {
        const key = 'allTimeOpened'
        let counter = getState()[key] + 1 || 0
        setState({ ...getState(), [key]: counter })
        chrome.storage.sync.set({ [key]: counter })
      },
  },
})

export const useCounter = createHook(Store)
