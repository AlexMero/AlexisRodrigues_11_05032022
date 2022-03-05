import styled from 'styled-components'
import colors from '../../style/color'

const StyledCard = styled.div`
  width: 340px;
  height: 340px;
  background: ${colors.primary};
  background: linear-gradient(
    180deg,
    ${colors.primary} 20%,
    rgba(0, 0, 0, 1) 150%
  );
  border-radius: 10px;
  margin: 50px;
  display: flex;
  align-items: flex-end;
`

const StyledTitle = styled.h1`
  font-size: 18px;
  color: white;
  margin: 20px;
`

function Card(props) {
  const title = props.title
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
    </StyledCard>
  )
}

export default Card
