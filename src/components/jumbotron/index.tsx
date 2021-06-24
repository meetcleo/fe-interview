import styled from 'styled-components'
import { Colors } from '../../@types'

const StyledJumbotron = styled.div`
  background: ${Colors.primary};
  height: 250px;
`

export default function Jumbotron() {
  return <StyledJumbotron />
}
