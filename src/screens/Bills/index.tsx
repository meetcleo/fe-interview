import { useContext, useState } from 'react'
import ErrorBanner from '../../components/error-message'
import MerchantCard from '../../components/merchant-card'
import { StateContext } from '../../providers/StateProvider'

export default function Bills() {
  const { merchants, removeBill } = useContext(StateContext)
  const [errorMessage, setErrorMessage] = useState('')

  const bills = merchants.filter((merchant) => merchant.isBill === true)

  if (!bills) return null

  const handleRemoveBill = async (id: number) => {
    try {
      await removeBill(id)
    } catch (e) {
      setErrorMessage('An error has occurred. Please try again later.')
    }
  }

  return (
    <>
      {errorMessage && <ErrorBanner message={errorMessage} />}
      {bills.map((bill) => (
        <MerchantCard
          key={bill.id}
          merchant={bill}
          onClick={handleRemoveBill}
          buttonText={'Remove Bill'}
        />
      ))}
    </>
  )
}
