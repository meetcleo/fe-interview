import { useContext, useState } from 'react'
import { Tab } from '../../@types'
import Card from '../../components/card'
import Container from '../../components/container'
import ErrorBanner from '../../components/error-message'
import Jumbotron from '../../components/jumbotron'
import PillboxButton from '../../components/pillbox-button'
import { StateContext } from '../../providers/StateProvider'
import Bills from '../Bills'
import PotentialBills from '../PotentialBills'

export default function Home() {
  const { isInitialLoading, hasError } = useContext(StateContext)
  const [tab, setTab] = useState<Tab>(Tab.Bills)

  if (isInitialLoading) return null

  if (hasError) {
    return (
      <Container style={{ paddingTop: 40 }}>
        <ErrorBanner
          message={'An error has occurred. Please ensure the server is running'}
        />
      </Container>
    )
  }

  return (
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
  )
}
