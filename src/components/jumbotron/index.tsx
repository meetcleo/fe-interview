import styled from 'styled-components'
import { Colors } from '../../@types'
import logo from '../../assets/logo.png'

const StyledJumbotron = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.primary};
  height: 250px;
`

export default function Jumbotron() {
  return (
    <StyledJumbotron>
      <img src={logo} height={50} />
    </StyledJumbotron>
  )
}
