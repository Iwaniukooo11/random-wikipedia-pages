import React from 'react'
import styled from 'styled-components'

import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Button from '../../components/button/button'

const StyledWrap = styled(Wrap)`
  margin: 25px auto;
`

const Buttons = () => {
  return (
    <Layout>
      <StyledWrap>
        <Button full first>
          Read full on Wikipedia
        </Button>
        <Button>Find another article</Button>
      </StyledWrap>
    </Layout>
  )
}

export default Buttons
