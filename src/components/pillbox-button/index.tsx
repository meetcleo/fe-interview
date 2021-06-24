import styled from 'styled-components'
import { Colors, Tab } from '../../@types'

const Wrapper = styled.div`
  display: flex;
  background-color: ${Colors.lightGrey};
  border-radius: 25px;
  padding: 5px;
  max-width: 350px;
  width: 100%;
`

const InnerWrapper = styled.div<{ active?: boolean }>`
  flex: 1;
  font-size: 14px;
  padding: 10px 20px;
  text-align: center;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border-radius: 25px;
  cursor: pointer;
`

export default function PillboxButton({
  activeTab,
  onChange,
}: {
  activeTab: Tab
  onChange: (tab: Tab) => void
}) {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <Wrapper>
        <InnerWrapper
          active={activeTab === Tab.Bills}
          onClick={() => onChange(Tab.Bills)}
        >
          Bills
        </InnerWrapper>
        <InnerWrapper
          active={activeTab === Tab.PotentialBills}
          onClick={() => onChange(Tab.PotentialBills)}
        >
          Potential Bills
        </InnerWrapper>
      </Wrapper>
    </div>
  )
}
