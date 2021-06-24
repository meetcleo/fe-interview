/*
 * Currency formatter using the Intl.NumberFormat package
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 * TODO: add IE polyfill and make currency parameter
 */
export default function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}
