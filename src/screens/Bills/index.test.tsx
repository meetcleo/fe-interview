import { act, create } from 'react-test-renderer'
import Bills from '.'
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

describe('Bills', () => {
  it('shows bills that have the isBill = true flag', () => {
    const mockRemoveBill = jest.fn()

    const { root } = create(
      <StateContext.Provider
        value={{ removeBill: mockRemoveBill, merchants: mockMerchants } as any}
      >
        <Bills />
      </StateContext.Provider>
    )

    expect(root.findByType(MerchantCard).props.merchant).toBe(
      mockMerchants.find((merchant) => merchant.isBill === true)
    )
  })
  it('calls the removeBill method when the primary button is clicked', async () => {
    const mockRemoveBill = jest.fn()

    const { root } = create(
      <StateContext.Provider
        value={{ removeBill: mockRemoveBill, merchants: mockMerchants } as any}
      >
        <Bills />
      </StateContext.Provider>
    )

    await act(async () => {
      await root.findByType(MerchantCard).props.onClick(1)
    })

    expect(mockRemoveBill).toHaveBeenNthCalledWith(1, 1)
  })
})
