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
        setState(initialState)

        const key = 'allTime'
        let allTime = 1

        chrome.storage.sync.get([key], async res => {
          if (key in res) allTime = res[key]

          if (allTime === 1) {
            chrome.storage.sync.set({ allTime: 1 })
          } else {
            allTime += 1
            chrome.storage.sync.set({ allTime: allTime })
          }

          const url =
            'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts|description&grnlimit=1&explaintext=&exintro'
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
          setState({ id, title, desc, isTooLong, allTime })
        })
      },
  },
})

export const useCounter = createHook(Store)
