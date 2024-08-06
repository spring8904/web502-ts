type IProduct = {
  id: number
  name: string
  price: number
  image: string
  categoryId: number
  shortDesc: string
  desc: string
  about: string
}

type ProductFormData = Pick<
  IProduct,
  'name' | 'price' | 'image' | 'categoryId' | 'shortDesc' | 'desc' | 'about'
>

type ProductDelete = Pick<IProduct, 'id' | 'name'>

type ICategory = {
  id?: number
  name: string
  image: string
}

type CategoryDelete = ICategory & { quantity: number }
