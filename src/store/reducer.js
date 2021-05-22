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
  },
})

export const useCounter = createHook(Store)
