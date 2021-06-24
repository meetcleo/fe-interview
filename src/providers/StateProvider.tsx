import { createContext, ReactElement, useEffect, useState } from 'react'
import { Merchant } from '../@types'
import { getCategoriesApi } from '../services/categories'
import {
  addBillApi,
  getMerchantsApi,
  removeBillApi,
} from '../services/merchants'

interface StateContextType {
  isInitialLoading: boolean
  hasError: boolean
  categories: Record<number, string>
  merchants: Merchant[]
  addBill: (id: number) => Promise<void>
  removeBill: (id: number) => Promise<void>
}

export const StateContext = createContext({} as StateContextType)

export default function StateProvider({
  children,
}: {
  children: ReactElement
}) {
  const [state, setState] = useState<{
    isInitialLoading: boolean
    hasError: boolean
    categories: Record<number, string>
    merchants: Merchant[]
  }>({
    isInitialLoading: true,
    hasError: false,
    categories: [],
    merchants: [],
  })

  const fetchInitialData = async () => {
    try {
      const [categories, merchants] = await Promise.all([
        getCategoriesApi(),
        getMerchantsApi(),
      ])

      // Make categories a hashmap for faster lookup
      const categoriesMap: Record<number, string> = {}
      categories.forEach((category) => {
        categoriesMap[category.id] = category.name
      })

      setState((prev) => ({
        ...prev,
        isInitialLoading: false,
        categories: categoriesMap,
        merchants,
      }))
    } catch (e) {
      setState({
        hasError: true,
        isInitialLoading: false,
        categories: {},
        merchants: [],
      })
    }
  }

  useEffect(() => {
    // Fetch information on categories and merchants
    fetchInitialData()
  }, [])

  const handleAddBill = async (id: number) => {
    const updatedMerchant = await addBillApi(id.toString())

    // Update state with updated merchant
    setState((prev) => ({
      ...prev,
      merchants: prev.merchants.map((merchant) =>
        merchant.id === id ? updatedMerchant : merchant
      ),
    }))
  }

  const handleRemoveBill = async (id: number) => {
    const updatedMerchant = await removeBillApi(id.toString())

    // Update state with updated merchant
    setState((prev) => ({
      ...prev,
      merchants: prev.merchants.map((merchant) =>
        merchant.id === id ? updatedMerchant : merchant
      ),
    }))
  }

  return (
    <StateContext.Provider
      value={{
        isInitialLoading: state.isInitialLoading,
        hasError: state.hasError,
        categories: state.categories,
        merchants: state.merchants,
        addBill: handleAddBill,
        removeBill: handleRemoveBill,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
