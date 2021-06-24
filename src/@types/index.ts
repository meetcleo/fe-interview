export interface Transaction {
  amount: number
  date: string
  id: number
}

export interface Merchant {
  categoryId: string
  iconUrl: string
  id: number
  name: string
  isBill: boolean
  transactions: Transaction[]
}

export interface Category {
  iconUrl: string
  id: number
  name: string
}
