import React from 'react'
import styled from 'styled-components'

import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Header from '../../components/header/header'
import Desc from '../../components/desc/desc'
import icon from '../../images/w-logo.svg'

const StyledWrap = styled(Wrap)`
  margin-top: 20px;
  display: flex;
  align-items: center;
`
const Img = styled.img`
  margin-right: 10px;
`
const Version = styled(Desc)`
  /* margin-left: 10px; */
  margin-left: auto;
  display: block;
`

const Banner = props => {
  return (
    <Layout>
      <StyledWrap>
        <Img src={icon} alt="" />
        <Header small black>
          Random Wikipedia Pages
        </Header>
        <Version small as={'span'}>
          (1.0.0)
        </Version>
      </StyledWrap>
    </Layout>
  )
}

export default Banner
