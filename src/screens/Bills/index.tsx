import { useContext } from 'react'
import MerchantCard from '../../components/merchant-card'
import { StateContext } from '../../providers/StateProvider'

export default function Bills() {
  const { merchants, removeBill } = useContext(StateContext)

  const bills = merchants.filter((merchant) => merchant.isBill === true)

  if (!bills) return null

  const handleRemoveBill = async (id: number) => {
    try {
      await removeBill(id)
    } catch (e) {
      // err
    }
  }

  return (
    <>
      {bills.map((bill, i) => (
        <MerchantCard
          key={i}
          merchant={bill}
          onClick={handleRemoveBill}
          buttonText={'Remove Bill'}
        />
      ))}
    </>
  )
}
