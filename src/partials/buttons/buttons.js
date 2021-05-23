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

  const linkClickHandler = () => {
    actions.incrementOpen()
    window.open(`http://en.wikipedia.org/?curid=${state.id}`, '_blank').focus()
  }

  return (
    <Layout>
      <StyledWrap>
        <Button full first active={!!state.title} onClick={linkClickHandler}>
          Read full on Wikipedia
        </Button>
        <Button
          active={!!state.title}
          disabled={!state.title}
          onClick={actions.fetchArticle}
        >
          Find another article
        </Button>
      </StyledWrap>
    </Layout>
  )
}

export default Buttons
