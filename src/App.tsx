import React from 'react'
import StateProvider from './providers/StateProvider'
import Home from './screens/Home'

function App() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  )
}

export default App
