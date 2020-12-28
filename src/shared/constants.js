export const StyleConstants = {
  colors: {
    blue: '#0815FF',
    yellow: '#F7BF31'
  }
};

export const wrapperStyles = {
  padding: '36px'
};

export const APIConstants = {
  base: 'http://localhost:3002/',
  bills: 'http://localhost:3002/bills',
  categories: 'http://localhost:3002/categories'
};

export const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 2
});
