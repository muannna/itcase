export const productsKeys = {
  all: ['products'],
  detail: (id) => ['products', id],
}

export const categoriesKeys = {
  all: ['categories'],
  detail: (id) => ['categories', id],
}

export const sizesKeys = {
  all: ['sizes'],
  detail: (id) => ['sizes', id],
}

export const colorsKeys = {
  product: (productId, colorId) => ['colors', productId, colorId],
}
