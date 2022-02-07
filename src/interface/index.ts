export interface CartItem {
    category: string,
    description: string,
    id: string,
    name: string,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string
    quantity: number
}
  