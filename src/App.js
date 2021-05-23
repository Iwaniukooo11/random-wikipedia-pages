/*global chrome*/
import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'
import Banner from './partials/banner/banner'
import Article from './partials/article/article'
import Buttons from './partials/buttons/buttons'
import Stats from './partials/stats/stats'
import Footer from './partials/footer/footer'

const Wrap = styled.div`
  display: grid;
  row-gap: 20px;
`

function App() {
  return (
    <div className="App">
      <Wrap>
        <Banner />
        <Article />
        <Buttons />
        <Stats />
        <Footer />
      </Wrap>
    </div>
  )
}

export default App
