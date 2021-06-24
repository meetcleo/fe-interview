import { useContext } from 'react'
import { StateContext } from '../../providers/StateProvider'

export default function Bills() {
  const { merchants } = useContext(StateContext)

  console.log(merchants)

  return <div>Bills</div>
}
