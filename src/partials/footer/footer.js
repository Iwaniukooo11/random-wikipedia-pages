import React from 'react'
import styled from 'styled-components'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import logoDev from '../../images/logo-dev.svg'
import logoGithub from '../../images/logo-github.svg'

const arr = [
  { link: 'https://dev.to/iwaniukooo11', img: logoDev },
  { link: 'https://github.com/Iwaniukooo11', img: logoGithub },
]

const Img = styled.img`
  width: 16px;
  margin-right: 10px;
`
const StyledWrap = styled(Wrap)`
  justify-content: flex-end;
  display: flex;
  align-items: center;
`

const A = styled.a`
  display: block;
  transition: 0.3s;
  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`
const Footer = () => {
  return (
    <Layout>
      <StyledWrap>
        {arr.map(el => (
          <A key={el.link} href={el.link} target="_blank">
            <Img src={el.img} />
          </A>
        ))}
      </StyledWrap>
    </Layout>
  )
}

export default Footer
