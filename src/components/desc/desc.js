import styled from 'styled-components'
import PropTypes from 'prop-types'

const Desc = styled.p`
  font-size: ${props => (props.small ? '12px' : '16px')};
  color: ${({ theme }) => theme.colorBlack};
  line-height: 22px;
`
Desc.propTypes = {
  small: PropTypes.bool,
}
export default Desc
