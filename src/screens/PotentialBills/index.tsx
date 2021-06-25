import { useContext, useState } from 'react'
import ErrorBanner from '../../components/error-message'
import MerchantCard from '../../components/merchant-card'
import { StateContext } from '../../providers/StateProvider'

export default function Bills() {
  const { merchants, addBill } = useContext(StateContext)
  const [errorMessage, setErrorMessage] = useState('')

  const potentialBills = merchants.filter(
    (merchant) => merchant.isBill === false
  )

  if (!potentialBills) return null

  const handleAddBill = async (id: number) => {
    try {
      await addBill(id)
    } catch (e) {
      setErrorMessage('An error has occurred. Please try again later.')
    }
  }

  return (
    <>
      {errorMessage && <ErrorBanner message={errorMessage} />}
      {potentialBills.map((bill) => (
        <MerchantCard
          key={bill.id}
          merchant={bill}
          onClick={handleAddBill}
          buttonText={'Add Bill'}
        />
      ))}
    </>
  )
}
