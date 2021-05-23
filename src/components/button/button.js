import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  width: 90%;
  background-color: ${props =>
    props.full ? props.theme.colorBlue : props.theme.colorWhite};
  color: ${props =>
    props.full ? props.theme.colorWhite : props.theme.colorBlack};
  font-size: 16px;
  font-family: 'Titillium Web', sans-serif;
  padding: 10px 0;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: none;
  margin: auto;
  display: block;
  margin-bottom: ${props => (props.first ? '15px' : 0)};
  transition: 0.3s;
  &:hover {
    opacity: ${props => (props.active ? 0.8 : 0.2)};
    cursor: pointer;
  }
  opacity: ${props => (props.active ? 1 : 0.2)};
`
Button.PropTypes = {
  full: PropTypes.bool,
  first: PropTypes.bool,
}
export default Button
