import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/header'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'

const Whiter = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.8) 93.23%
  );
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Article = props => {
  return (
    <Layout>
      <Wrap as="article">
        <Header bold margin>
          Bactria–Margiana Archaeological Complex
        </Header>
        <Desc>
          The Bactria–Margiana Archaeological Complex (short BMAC), also known
          as the Oxus civilization, is the modern archaeological designation for
          a Bronze Age civilization of Central Asia, dated to c. 2400–1900 BC in
          its urban phase or Integration Era, located in {'...'}
        </Desc>
        <Whiter />
      </Wrap>
    </Layout>
  )
}

export default Article
