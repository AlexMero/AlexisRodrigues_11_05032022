import styled from 'styled-components'
import colors from '../../style/color'

const StyledTag = styled.span`
  background-color: ${colors.primary};
  min-width: 130px;
  font-size: 14px;
  margin-right: 10px;
  text-align: center;
  padding: 7px;
  border-radius: 10px;
  color: white;
`

function Tag({ texte }) {
  return <StyledTag>{texte}</StyledTag>
}

export default Tag
