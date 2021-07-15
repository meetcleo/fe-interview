import {
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@styled-icons/material-outlined'
import { useContext, useEffect, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { Breakpoints, Colors, Merchant } from '../../@types'
import { StateContext } from '../../providers/StateProvider'
import formatCurrency from '../../utils/format-currency'
import SecondaryButton from '../secondary-button'

const IMAGE_WIDTH = 40
const IMAGE_MARGIN = 15

const Icon = styled.img`
  width: ${IMAGE_WIDTH}px;
  margin-right: ${IMAGE_MARGIN}px;
  border-radius: 20px;
`

const EmptyIcon = styled.div`
  height: ${IMAGE_WIDTH}px;
  width: ${IMAGE_WIDTH}px;
  margin-right: ${IMAGE_MARGIN}px;
  background-color: ${Colors.primary};
  border-radius: 20px;
`

const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid ${Colors.lightGrey};
  }
`

const InnerWrapper = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  text-align: left;
  padding: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const OpenWrapper = styled.div`
  margin-left: ${IMAGE_WIDTH + IMAGE_MARGIN}px;
  margin-top: 20px;

  @media (max-width: ${`${Breakpoints.Small}px`}) {
    margin-left: 0;
  }
`

export default function MerchantCard({
  merchant,
  onClick,
  buttonText,
}: {
  merchant: Merchant
  onClick: (id: number) => void
  buttonText: string
}) {
  const contentRef = useRef<null | HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)
  const [isOpen, setIsOpen] = useState(false)
  const { categories } = useContext(StateContext)

  const animatedStyles = useSpring({
    maxHeight: isOpen ? contentHeight : 0,
    overflow: 'hidden',
  })

  useEffect(() => {
    // Get height of content for animation purposes
    setContentHeight(contentRef?.current?.scrollHeight || 0)
  }, [])

  const { id, categoryId, iconUrl, name, transactions } = merchant

  const totalSum = transactions.reduce((sum, transaction) => {
    const { amount } = transaction
    return sum + amount
  }, 0)

  const averageAmount = totalSum / transactions.length

  return (
    <Wrapper>
      <InnerWrapper onClick={() => setIsOpen(!isOpen)}>
        {iconUrl ? (
          <Icon src={`${process.env.PUBLIC_URL}/assets/${iconUrl}`} />
        ) : (
          <EmptyIcon />
        )}

        <div
          style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}
        >
          <div>
            <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 3 }}>
              {name}
            </div>
            <div style={{ color: 'darkgrey', fontSize: 14 }}>
              {transactions.length} transactions | {categories[categoryId]}
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            {isOpen ? (
              <KeyboardArrowDown height={20} color={'lightgrey'} />
            ) : (
              <KeyboardArrowRight height={20} color={'lightgrey'} />
            )}
          </div>
        </div>
      </InnerWrapper>

      {/* Collapsible Section */}
      <animated.div ref={contentRef} style={animatedStyles}>
        <OpenWrapper>
          <div style={{ marginBottom: 30 }}>
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}
              >
                <div style={{ fontSize: 14 }}>{transaction.date}</div>
                <div style={{ fontSize: 14 }}>
                  {formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
          <div data-testid={'average-amount'}>{averageAmount}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SecondaryButton onClick={() => onClick(id)}>
              {buttonText}
            </SecondaryButton>
          </div>
        </OpenWrapper>
      </animated.div>
    </Wrapper>
  )
}
