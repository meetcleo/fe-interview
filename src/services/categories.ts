import { Category } from '../@types'

const apiUrl = 'http://localhost:3002/categories'

export const getCategoriesApi = async () => {
  const response = await fetch(apiUrl)

  if (response.status !== 200) {
    throw new Error('An error occurred')
  }

  const data: Category[] = await response.json()
  return data
}
