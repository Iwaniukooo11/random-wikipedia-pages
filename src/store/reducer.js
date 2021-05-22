import { createStore, createHook } from 'react-sweet-state'

const Store = createStore({
  initialState: {
    title: '',
    desc: '',
    id: '',
    isTooLong: false,
  },
  actions: {
    setArticle:
      obj =>
      ({ setState, getState }) => {
        setState(obj)
      },
    fetchArticle:
      () =>
      async ({ setState, getState }) => {
        const url =
          'https://pl.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts|description&grnlimit=1&explaintext=&exintro'
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
        console.log(response, id, title, desc)
        setState({ id, title, desc, isTooLong })
      },
  },
})

export const useCounter = createHook(Store)
