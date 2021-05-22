import React from 'react'
import { useCounter } from '../../store/reducer'
import styled from 'styled-components'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Header from '../../components/header/header'
import Desc from '../../components/desc/desc'

const NumberWrap = styled.div`
  display: grid;
  padding: 10px 0;
  justify-content: center;
  flex-grow: 1;
  row-gap: 6px;
  position: relative;
  &.first {
    &::before {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 25px;
      width: 2px;
      background-color: ${props => props.theme.colorBlue};
      z-index: 50;
    }
  }
`
const StyledWrap = styled(Wrap)`
  display: flex;
  border-radius: 5px;
  width: 90%;
  padding-bottom: 20px;
  &::before {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colorBlue};
    transform: translateX(-50%);
    height: 2px;
    width: 70%;
    bottom: 14px;
    left: 50%;
  }

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
`

const Stats = props => {
  const [state, actions] = useCounter()
  console.log(
    'stats get',
    state
    //   state.res,
    //   state.res,
    //   Object.keys(state.res),
    //   state.res[Object.keys(state.res)]
  )
  return (
    <Layout>
      <Wrap>
        <Header bold margin>
          Number of shown Pages
        </Header>
        <StyledWrap>
          <NumberWrap className="first">
            <Desc center>this day</Desc>
            <Desc bold center>
              3
            </Desc>
          </NumberWrap>
          <NumberWrap>
            <Desc center>all time</Desc>
            <Desc bold center>
              {state.allTime}
            </Desc>
          </NumberWrap>
        </StyledWrap>
      </Wrap>
    </Layout>
  )
}

export default Stats
