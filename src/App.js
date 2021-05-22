import React from 'react'
import logo from './logo.svg'
import './App.css'
import Banner from './partials/banner/banner'
import Article from './partials/article/article'
import Buttons from './partials/buttons/buttons'

function App() {
  return (
    <div className="App">
      <Banner />
      <Article />
      <Buttons />
    </div>
  )
}

export default App
