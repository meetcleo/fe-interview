import React, { useState } from 'react'
import { Tab } from './@types'
import Card from './components/card'
import Container from './components/container'
import Jumbotron from './components/jumbotron'
import PillboxButton from './components/pillbox-button'
import StateProvider from './providers/StateProvider'
import Bills from './screens/Bills'
import PotentialBills from './screens/PotentialBills'

function App() {
  const [tab, setTab] = useState<Tab>(Tab.Bills)

  return (
    <StateProvider>
      <>
        <Jumbotron />
        <Container style={{ marginTop: -50 }}>
          <Card>
            <div style={{ marginBottom: 20 }}>
              <PillboxButton activeTab={tab} onChange={setTab} />
            </div>
            {tab === Tab.Bills && <Bills />}
            {tab === Tab.PotentialBills && <PotentialBills />}
          </Card>
        </Container>
      </>
    </StateProvider>
  )
}

export default App
