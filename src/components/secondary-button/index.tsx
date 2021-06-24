import styled from 'styled-components'
import { Colors } from '../../@types'

const SecondaryButton = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  border: 2px solid whitesmoke;
  background-color: whitesmoke;
  box-shadow: none;
  color: darkgrey;
  font-size: 14px;
  border-radius: 5px;
  padding: 12px 20px;
  transition: all 0.1s ease;
  outline: none;
  &:hover {
    background-color: ${Colors.primary};
    border-color: ${Colors.primary};
    color: white;
  }
  &:active {
    background-color: ${Colors.primary};
    border-color: ${Colors.primary};
    color: white;
  }
  &:focus {
    background-color: lightgrey;
    border-color: lightgrey;
    color: white;
  }
`

export default SecondaryButton
