## Cleo Frontend Interview - Bills

### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of merchants with transactions that have been marked as bills. These can be found at http://localhost:3002/merchants. Merchant's marked as bills, have a flag `isBill` set to `true`.
1. Another tab should show a list of merchants with transactions which are potential bills. These can also be found at http://localhost:3002/merchants. Merchant's that could be potentially bills have a flag `isBill` set to `false`.
1. Under each merchant row for both lists, should be a hidden list of transactions for that merchant. This should show when the merchant row is clicked.
1. Under the name of each merchant should show a count of the transactions for it
1. Add an action to the bills tab for each merchant called "remove bill" which updates the relevant merchant's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3002/merchants/:id` using the id of the merchant to update the resource.
1. Add an action to the potential bills tab for each merchant called "Add as bill" which updates the relevant merchant's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Chanon's Notes

Some notes on the tech used:
- **react-test-renderer** - I swapped out react-testing-library for the more lower-level library
- **React Context API** - Redux seemed heavy for this use case, so I relied on a `useState` context provider with testing to handle the app's state. Given that certain resources needed to be fetched separately, such as `categories`, it would be interesting to explore using GraphQL to delegate the joining of this data to the server layer. The StateProvider is heavily integration tested using `@testing-library/react-hooks`, which a small abstraction that allows hooks to be tested without the need to spin up a mock component.
- **Styled-Components** - I leaned heavily on styled components to handle CSS-in-JS components, but also used inline React styles for smaller use cases, such as section margin and padding.
- **React-Spring** - I used this library to add animations to the accordion section on the MerchantCard.

Where I would go with more time:
- In the interest of time, I focused on the more important tests - but, I would focus further on unit testing the components, especially the `MerchantCard` component.
- I would spend more time on animations, specifically with the pillbox to have a smooth toggle effect similar to what you see in `Monzo`.
- I would spend some added time making sure that browser polyfills and mobile responsiveness is respected, especially on very small devices.

## Screenshot

![image](https://github.com/chanonroy/fe-interview/blob/master/src/assets/screenshot.png)
