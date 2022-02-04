interface productType {
  price: number
  quantity: number
  title: string
}

export default function Product({ price, quantity, title }: productType) {
  return (
    <div>
      {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
  )
}
