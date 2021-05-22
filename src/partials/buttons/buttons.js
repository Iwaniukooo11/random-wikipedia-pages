import React from 'react'
import styled from 'styled-components'
import { useCounter } from '../../store/reducer'

import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Button from '../../components/button/button'

const StyledWrap = styled(Wrap)`
  margin: 25px auto;
`

const Buttons = () => {
  const [state, actions] = useCounter()

  return (
    <Layout>
      <StyledWrap>
        <Button
          full
          first
          as="a"
          target="_blank"
          href={`http://en.wikipedia.org/?curid=${state.id}`}
        >
          Read full on Wikipedia
        </Button>
        <Button onClick={actions.fetchArticle}>Find another article</Button>
      </StyledWrap>
    </Layout>
  )
}

export default Buttons
