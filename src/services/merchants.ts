import { Merchant } from '../@types'

const API_URL = 'http://localhost:3002/merchants'

export const getMerchantsApi = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
  })

  if (response.status !== 200) {
    throw new Error('An error occurred')
  }

  const data: Merchant[] = await response.json()
  return data
}

export const addBillApi = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isBill: true,
    }),
  })

  if (response.status !== 200) {
    throw new Error('An error occurred')
  }

  const data: Merchant = await response.json()
  return data
}

export const removeBillApi = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      isBill: false,
    }),
  })

  if (response.status !== 200) {
    throw new Error('An error occurred')
  }

  const data: Merchant = await response.json()
  return data
}
