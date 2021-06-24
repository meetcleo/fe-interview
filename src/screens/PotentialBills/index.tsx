import { useContext } from 'react'
import MerchantCard from '../../components/merchant-card'
import { StateContext } from '../../providers/StateProvider'

export default function Bills() {
  const { merchants, addBill } = useContext(StateContext)

  const potentialBills = merchants.filter(
    (merchant) => merchant.isBill === false
  )

  if (!potentialBills) return null

  const handleAddBill = async (id: number) => {
    try {
      await addBill(id)
    } catch (e) {
      // err
    }
  }

  return (
    <>
      {potentialBills.map((bill, i) => (
        <MerchantCard
          key={i}
          merchant={bill}
          onClick={handleAddBill}
          buttonText={'Add Bill'}
        />
      ))}
    </>
  )
}
