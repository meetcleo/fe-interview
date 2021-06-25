import styled from 'styled-components'
import { Colors } from '../../@types'

const StyledBanner = styled.div`
  color: ${Colors.danger};
  background-color: #ffebe6;
  font-size: 14px;
  padding: 20px;
  border-radius: 5px;
`

export default function ErrorBanner({ message }: { message: string }) {
  return <StyledBanner>{message}</StyledBanner>
}
