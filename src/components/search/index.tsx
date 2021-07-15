import { useContext, useState } from 'react'
import { StateContext } from '../../providers/StateProvider'

export default function Search() {
  const { merchants } = useContext(StateContext)
  const [query, setQuery] = useState<string>('')

  console.log(query)
  console.log({ merchants })

  const searchResults = merchants.filter(
    (merchant) => merchant.name.toLocaleLowerCase() === query
  )

  return (
    <>
      <input
        value={query}
        onChange={(e) => {
          const query = e.target.value
          setQuery(query.toLowerCase())
        }}
      />
      {searchResults.length > 0 && (
        <>
          {searchResults.map((result) => (
            <div key={result.id}>{result.name}</div>
          ))}
        </>
      )}

      {!!query && searchResults.length === 0 && (
        <div>Sorry! No merchants found</div>
      )}
    </>
  )
}
