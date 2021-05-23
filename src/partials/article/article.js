/*global chrome*/

import React, { useEffect } from 'react'
import { useCounter } from '../../store/reducer'
import styled from 'styled-components'
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
const StyledDesc = styled(Desc)`
  height: 154px;
`

const Article = props => {
  const [state, actions] = useCounter()

  useEffect(() => {
    actions.fetchArticle()
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
        <StyledDesc>
          {state.desc ? (
            state.isTooLong ? (
              `${state.desc}...`
            ) : (
              state.desc
            )
          ) : (
            <Skeleton count={5} />
          )}
        </StyledDesc>
        {state.isTooLong && <Whiter />}
      </Wrap>
    </Layout>
  )
}

export default Article
