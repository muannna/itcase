export function CartItemTitle({ item }) {
  return (
    <p>
      {item.product?.name ?? item.productNameAtAdd} {item.product?.brand ?? item.productBrandAtAdd}
    </p>
  )
}
