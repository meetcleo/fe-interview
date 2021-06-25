import { act, create } from 'react-test-renderer'
import Home from '.'
import { Tab } from '../../@types'
import ErrorBanner from '../../components/error-message'
import PillboxButton from '../../components/pillbox-button'
import { StateContext, StateContextType } from '../../providers/StateProvider'
import Bills from '../Bills'
import PotentialBills from '../PotentialBills'

jest.mock('../Bills', () => () => <></>)
jest.mock('../PotentialBills', () => () => <></>)

describe('Home', () => {
  it('shows an error state when the app has an error', () => {
    const { root } = create(
      <StateContext.Provider
        value={{ isInitialLoading: false, hasError: true } as StateContextType}
      >
        <Home />
      </StateContext.Provider>
    )

    expect(root.findByType(ErrorBanner).props.message).toBe(
      'An error has occurred. Please ensure the server is running'
    )
  })
  it('switches tabs between bills and potential bills', () => {
    const { root } = create(
      <StateContext.Provider
        value={{ isInitialLoading: false, hasError: false } as StateContextType}
      >
        <Home />
      </StateContext.Provider>
    )

    act(() => {
      root.findByType(PillboxButton).props.onChange(Tab.PotentialBills)
    })

    expect(root.findByType(PotentialBills)).toBeTruthy()

    act(() => {
      root.findByType(PillboxButton).props.onChange(Tab.Bills)
    })

    expect(root.findByType(Bills)).toBeTruthy()
  })
})
