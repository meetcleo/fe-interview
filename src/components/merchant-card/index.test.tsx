import { act, create } from 'react-test-renderer'
import MerchantCard from '.'
import { Merchant } from '../../@types'
import { StateContext, StateContextType } from '../../providers/StateProvider'
import SecondaryButton from '../secondary-button'

const mockMerchant: Merchant = {
  id: 1,
  categoryId: 1,
  name: 'Pret',
  isBill: true,
  iconUrl: 'iconUrl',
  transactions: [
    { id: 1, date: '2021-02-02', amount: 10.0 },
    { id: 2, date: '2021-02-02', amount: 5.0 },
  ],
}

const mockCategories: Record<number, string> = {
  1: 'Food',
}

describe('Merchant Card', () => {
  it('fires onClick callback when primary button is selected', () => {
    const onClick = jest.fn()
    const { root } = create(
      <StateContext.Provider
        value={{ categories: mockCategories } as StateContextType}
      >
        <MerchantCard
          merchant={mockMerchant}
          onClick={onClick}
          buttonText={'Button'}
        />
      </StateContext.Provider>
    )

    expect(root.findByType(SecondaryButton)).toBeTruthy()

    act(() => {
      root.findByType(SecondaryButton).props.onClick()
    })

    expect(onClick).toHaveBeenCalledTimes(1)
  })
  it('displays the average transaction amount', async () => {
    const onClick = jest.fn()
    const { root } = create(
      <StateContext.Provider
        value={{ categories: mockCategories } as StateContextType}
      >
        <MerchantCard
          merchant={mockMerchant}
          onClick={onClick}
          buttonText={'Button'}
        />
      </StateContext.Provider>
    )

    expect(
      root.findByProps({ 'data-testid': 'average-amount' }).props.children
    ).toBe(7.5)
  })
})
