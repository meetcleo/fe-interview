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
  transactions: [{ id: 1, date: '2021-02-02', amount: 12.34 }],
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
})
