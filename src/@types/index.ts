export interface Transaction {
  amount: number
  date: string
  id: number
}

export interface Merchant {
  categoryId: number
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

export enum Tab {
  Bills = 'bills',
  PotentialBills = 'potential-bills',
}

export const Colors = {
  primary: '#0E16FF',
  primaryAccent: '#66b1ff',
  background: 'whitesmoke',
  lightGrey: '#f0f0f0',
  dark: '#403E3D',
}

export enum Breakpoints {
  xSmall = 480,
  Small = 800,
  Medium = 992,
  Large = 1200,
}
