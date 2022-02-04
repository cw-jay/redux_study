import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const limit = 3

export const shoppingApi = createApi({
  reducerPath: 'shoppingApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://fakestoreapi.com/products?limit=${limit}` }),
  endpoints: (builder) => ({
  }),
})

export function fetchProductList() {
  return fetch(`https://fakestoreapi.com/products?limit=${limit}`)
}

// export function makeASandwichWithSecretSauce(forPerson: any) {
//   // Invert control!
//   // Return a function that accepts `dispatch` so we can dispatch later.
//   // Thunk middleware knows how to turn thunk async actions into actions.
//   return function (dispatch: any) {
//     return fetchSecretSauce().then(
//       sauce => dispatch(makeASandwich(forPerson, sauce)),
//       error => dispatch(apologize('The Sandwich Shop', forPerson, error))
//     )
//   }
// }