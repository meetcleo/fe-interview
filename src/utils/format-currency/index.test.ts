import formatCurrency from '.'

test('formatCurrency returns expected value', () => {
  expect(formatCurrency(12.45)).toBe('$12.45')
  expect(formatCurrency(12.454)).toBe('$12.45')
  expect(formatCurrency(1200.454)).toBe('$1,200.45')
  expect(formatCurrency(100000.0)).toBe('$100,000.00')
})
