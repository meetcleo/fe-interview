import { renderHook } from '@testing-library/react-hooks'
import { ReactElement, useContext } from 'react'
import { mocked } from 'ts-jest/utils'
import { Category, Merchant } from '../@types'
import { getCategoriesApi } from '../services/categories'
import {
  addBillApi,
  getMerchantsApi,
  removeBillApi,
} from '../services/merchants'
import StateProvider, { StateContext } from './StateProvider'

jest.mock('../services/categories')
jest.mock('../services/merchants')

const mockCategories: Category[] = [
  { id: 1, name: 'Food', iconUrl: 'iconUrl' },
  { id: 2, name: 'Banking', iconUrl: 'iconUrl' },
]
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

describe('StateProvider', () => {
  beforeEach(() => {
    mocked(getCategoriesApi).mockReturnValue(mockCategories as any)
    mocked(getMerchantsApi).mockReturnValue(mockMerchants as any)
  })
  it('fetches initial data and changes isInitialLoading flag', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )

    await waitForNextUpdate()

    expect(result.current.merchants).toEqual(mockMerchants)
    expect(result.current.categories).toEqual({ 1: 'Food', 2: 'Banking' })
    expect(result.current.isInitialLoading).toBe(false)
    expect(result.current.hasError).toBe(false)
  })
  it('throws and catches error when initial fetch fails', async () => {
    mocked(getMerchantsApi).mockImplementation(async () => {
      throw new Error('Error')
    })

    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )
    await waitForNextUpdate()

    expect(result.current.isInitialLoading).toBe(false)
    expect(result.current.hasError).toBe(true)
  })
  it('adds bill with handleAddBill method', async () => {
    mocked(addBillApi).mockReturnValue({
      ...mockMerchants[1],
      isBill: true,
    } as any)

    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )
    await waitForNextUpdate()

    result.current.addBill(2)

    await waitForNextUpdate()

    const updatedMerchant = result.current.merchants.find(
      (merchant) => merchant.id === 2
    )

    expect(updatedMerchant?.isBill).toBe(true)
  })
  it('removes bill with handleRemoveBill method', async () => {
    mocked(removeBillApi).mockReturnValue({
      ...mockMerchants[0],
      isBill: false,
    } as any)

    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )
    await waitForNextUpdate()

    result.current.removeBill(1)

    await waitForNextUpdate()

    const updatedMerchant = result.current.merchants.find(
      (merchant) => merchant.id === 1
    )

    expect(updatedMerchant?.isBill).toBe(false)
  })
  it('throws error when handleAddBill fails', async () => {
    mocked(addBillApi).mockImplementation(async () => {
      throw new Error('Error')
    })

    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )
    await waitForNextUpdate()

    await expect(async () => await result.current.addBill(1)).rejects.toThrow()
  })
  it('throws error when handleRemoveBill fails', async () => {
    mocked(removeBillApi).mockImplementation(async () => {
      throw new Error('Error')
    })

    const wrapper = ({ children }: { children: ReactElement }) => (
      <StateProvider>{children}</StateProvider>
    )

    const { result, waitForNextUpdate } = await renderHook(
      () => useContext(StateContext),
      { wrapper }
    )
    await waitForNextUpdate()

    await expect(
      async () => await result.current.removeBill(2)
    ).rejects.toThrow()
  })
})
