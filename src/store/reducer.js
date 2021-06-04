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
      //My fetchArticle code
      async ({ setState, getState }) => {
        //loading
        setState(initialState)

        //local storage section
        const keyShown = 'allTimeShown'
        const keyOpen = 'allTimeOpened'
        let counterAllTimeShown = 1
        let counterAllTimeOpen = 0
        let isFound = false

        chrome.storage.sync.get([keyShown, keyOpen], async res => {
          counterAllTimeOpen = res[keyOpen] || 0 //Checking if response contains my totalOpen key
          if (keyShown in res) {
            counterAllTimeShown = res[keyShown]
            isFound = true
          }

          if (isFound)
            //If contains, increment totalShownStats
            chrome.storage.sync.set({ [keyShown]: counterAllTimeShown + 1 })
          else {
            //If not, set default
            chrome.storage.sync.set({ [keyShown]: 2 })
          }

          //Fetch data section
          const url =
            'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts&grnlimit=1&explaintext='
          let resp = await fetch(url)
          resp = await resp.json()

          //Getting title, extract and Id values from response
          const response = { ...resp }
          const id = Object.keys(response.query.pages)[0]
          const title = response.query.pages[id].title
          let desc = response.query.pages[id].extract

          let isTooLong = false //Some articles might be very very long - There is no enough place in that litle extension. So that, I set limit to 250.
          if (desc.length >= 252) {
            desc = desc.substring(0, 250)
            isTooLong = true
          }

          //Final - setting state!
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
        const counter = getState()[key] + 1 || 0
        setState({ ...getState(), [key]: counter })
        chrome.storage.sync.set({ [key]: counter })
      },
  },
})

export const useCounter = createHook(Store)
