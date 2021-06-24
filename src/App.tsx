import React, { useState } from 'react'
import Card from './components/card'
import Container from './components/container'
import Jumbotron from './components/jumbotron'
import StateProvider from './providers/StateProvider'
import Bills from './screens/Bills'
import PotentialBills from './screens/PotentialBills'

function App() {
  const [tab, setTab] = useState<'bills' | 'potential'>('bills')

  return (
    <StateProvider>
      <>
        <Jumbotron />
        <Container style={{ marginTop: -50 }}>
          <Card>
            <div style={{ marginBottom: 20 }}>
              <button onClick={() => setTab('bills')}>Bills</button>
              <button onClick={() => setTab('potential')}>
                Potential Bills
              </button>
            </div>
            {tab === 'bills' && <Bills />}
            {tab === 'potential' && <PotentialBills />}
          </Card>
        </Container>
      </>
    </StateProvider>
  )
}

export default App
