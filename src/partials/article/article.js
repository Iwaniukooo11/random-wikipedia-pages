import React, { useEffect } from 'react'
import { useCounter } from '../../store/reducer'
import styled, { StyleSheetManager } from 'styled-components'
import Header from '../../components/header/header'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import theme from '../../layout/theme'

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
  const [state, actions] = useCounter()

  const fetchArticleHandler = () => {
    const fc = async () => {
      const url =
        'https://pl.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts|description&grnlimit=1&explaintext=&exintro'
      let resp = await fetch(url)
      // console.log(resp)
      resp = await resp.json()
      // console.log(resp)

      const response = { ...resp }
      // console.log(response)
      const id = Object.keys(response.query.pages)[0]
      const title = response.query.pages[id].title
      let desc = response.query.pages[id].extract
      let isTooLong = false
      if (desc.length >= 252) {
        desc = desc.substring(0, 250)
        isTooLong = true
      }
      console.log(response, id, title, desc)
      actions.setArticle({ title, desc, id, isTooLong })
    }
    fc()
  }
  useEffect(() => {
    fetchArticleHandler()
  }, [])

  return (
    <Layout>
      <Wrap as="article">
        {/* <SkeletonTheme color={theme.colorBlue}> */}
        <Header bold margin>
          {/* Bactria–Margiana Archaeological Complex */}
          {state.title || <Skeleton />}
        </Header>
        {/* </SkeletonTheme> */}
        <Desc>
          {/* The Bactria–Margiana Archaeological Complex (short BMAC), also known
          as the Oxus civilization, is the modern archaeological designation for
          a Bronze Age civilization of Central Asia, dated to c. 2400–1900 BC in
          its urban phase or Integration Era, located in {'...'} */}
          {state.desc ? (
            state.isTooLong ? (
              `${state.desc}...`
            ) : (
              state.desc
            )
          ) : (
            <Skeleton count={7} />
          )}
        </Desc>
        {state.isTooLong && <Whiter />}
      </Wrap>
    </Layout>
  )
}

export default Article
