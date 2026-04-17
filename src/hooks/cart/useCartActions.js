import { useDispatch } from 'react-redux'
import { addItem } from '../../app/store/cart/cartSlice'

export function useCartActions() {
  const dispatch = useDispatch()

  const addToCart = ({ productId, productNameAtAdd, productBrandAtAdd, color, size }) => {
    dispatch(
      addItem({
        productId,
        productNameAtAdd,
        productBrandAtAdd,
        colorId: color.id,
        colorNameAtAdd: color.name,
        sizeId: size.id,
        priceAtAdd: color.price,
        image: color.images[0],
        sizeNameAtAdd: `${size.name} (${size.number})`,
      }),
    )
  }

  const addFakeToCart = () => {
    const items = [
      {
        productId: 7,
        colorId: 1,
        sizeId: 1,
        priceAtAdd: '519.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Lacoste',
        colorNameAtAdd: 'розовый',
        sizeNameAtAdd: 'XS (44)',
      },
      {
        productId: 1,
        colorId: 4,
        sizeId: 1,
        priceAtAdd: '519.00',
        image: '/images/1/gray_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'розовый',
        sizeNameAtAdd: 'XS (44)',
      },
      {
        productId: 1,
        colorId: 1,
        sizeId: 4,
        priceAtAdd: '123.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'черный',
        sizeNameAtAdd: 'L (50)',
      },
      {
        productId: 1,
        colorId: 1,
        sizeId: 1,
        priceAtAdd: '126.00',
        image: '/images/1/black_front.png',
        productNameAtAdd: 'Футболка',
        productBrandAtAdd: 'Basic Club',
        colorNameAtAdd: 'черный',
        sizeNameAtAdd: 'XS (44)',
      },
    ]

    items.forEach((item) => dispatch(addItem(item)))
  }

  return { addToCart, addFakeToCart }
}
