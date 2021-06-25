import { act, create } from 'react-test-renderer'
import PotentialBills from '.'
import { Merchant } from '../../@types'
import MerchantCard from '../../components/merchant-card'
import { StateContext } from '../../providers/StateProvider'

jest.mock('../../components/merchant-card', () => () => <></>)

const mockMerchants: Merchant[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'Pret',
    isBill: true,
    iconUrl: 'iconUrl',
    transactions: [{ id: 1, date: '2021-02-02', amount: 12.34 }],
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Starbucks',
    isBill: false,
    iconUrl: 'iconUrl',
    transactions: [{ id: 2, date: '2021-02-02', amount: 12.34 }],
  },
]

describe('PotentialBills', () => {
  it('shows potential bills that have the isBill = false flag', () => {
    const mockAddBill = jest.fn()

    const { root } = create(
      <StateContext.Provider
        value={{ addBill: mockAddBill, merchants: mockMerchants } as any}
      >
        <PotentialBills />
      </StateContext.Provider>
    )

    expect(root.findByType(MerchantCard).props.merchant).toBe(
      mockMerchants.find((merchant) => merchant.isBill === false)
    )
  })
  it('calls the addBill method when the primary button is clicked', async () => {
    const mockAddBill = jest.fn()

    const { root } = create(
      <StateContext.Provider
        value={{ addBill: mockAddBill, merchants: mockMerchants } as any}
      >
        <PotentialBills />
      </StateContext.Provider>
    )

    await act(async () => {
      await root.findByType(MerchantCard).props.onClick(2)
    })

    expect(mockAddBill).toHaveBeenNthCalledWith(1, 2)
  })
})
