import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/client/Banner'
import instance from '../services/customizeAxios'
import { formatMoney } from '../services/default'

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  const getProducts = async () => {
    try {
      const { data } = await instance.get('/products')
      setProducts(data.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  const [categories, setCategories] = useState<IProduct[]>([])

  const getCategories = async () => {
    try {
      const { data } = await instance.get('/categories')
      setCategories(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getCategoryName = (id: number) => {
    const category = categories.find((c) => c.id == id)
    return category?.name
  }

  useEffect(() => {
    document.title = 'Trang chủ'
    getProducts()
    getCategories()
  }, [])

  return (
    <main className="bg-[#F8F4F0]">
      <Banner />
      <div className="border-b border-[#0000001A] pt-12">
        <div className="m-auto max-w-screen-lg">
          <span className="font-baloo text-[30px] text-[#505F4E]">
            Bán chạy
          </span>
        </div>
      </div>
      <div className="pt-1">
        <div className="bg-white">
          <div className="m-auto max-w-screen-lg">
            <div className="flex items-center gap-10 pb-14 pt-16">
              {products.map((product, i) => {
                if (i < 4) {
                  return (
                    <div className="w-1/4 overflow-hidden" key={product.id}>
                      <div className="flex h-[260px] items-center justify-center">
                        <img
                          src={product.image}
                          className="m-auto h-full w-full"
                        />
                      </div>
                      <Link
                        to={`/single-product/${product.id}`}
                        className="mt-6 block w-full overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-semibold text-[#665345]"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-2 flex items-center justify-between text-xs">
                        <span className="text-[#777]">
                          {getCategoryName(product.categoryId)}
                        </span>
                        <span className="font-semibold text-[#665345]">
                          {formatMoney(product.price)} đ
                        </span>
                      </p>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="m-auto max-w-screen-lg">
          <div className="flex items-center gap-3">
            <div className="relative h-[565px] w-full bg-[url(/media/1/product2/1.png)] bg-no-repeat">
              <div className="absolute w-full bg-[linear-gradient(92deg,_rgba(255,_255,_255,_0.50)_0.8%,_rgba(255,_255,_255,_0.38)_63.3%,_rgba(255,_255,_255,_0.00)_98.92%)] py-4 pl-8 text-2xl font-semibold lowercase text-[#2B2B2B]">
                Xẻng làm vườn
              </div>
            </div>
            <div className="flex h-[565px] w-full flex-wrap items-center gap-3">
              <div className="relative h-[calc(50%_-_8px)] w-[calc(50%_-_8px)] bg-[url(/media/1/product2/2.png)]">
                <div className="absolute w-full bg-[linear-gradient(92deg,_rgba(255,_255,_255,_0.50)_0.8%,_rgba(255,_255,_255,_0.38)_63.3%,_rgba(255,_255,_255,_0.00)_98.92%)] py-4 pl-8 text-2xl font-semibold lowercase text-[#2B2B2B]">
                  Cát
                </div>
              </div>
              <div className="relative h-[calc(50%_-_8px)] w-[calc(50%_-_8px)] bg-[url(/media/1/product2/3.png)]">
                <div className="absolute w-full bg-[linear-gradient(92deg,_rgba(255,_255,_255,_0.50)_0.8%,_rgba(255,_255,_255,_0.38)_63.3%,_rgba(255,_255,_255,_0.00)_98.92%)] py-4 pl-8 text-2xl font-semibold lowercase text-[#2B2B2B]">
                  Giỏ
                </div>
              </div>
              <div className="relative h-[calc(50%_-_8px)] w-[calc(50%_-_8px)] bg-[url(/media/1/product2/4.png)]">
                <div className="absolute w-full bg-[linear-gradient(92deg,_rgba(255,_255,_255,_0.50)_0.8%,_rgba(255,_255,_255,_0.38)_63.3%,_rgba(255,_255,_255,_0.00)_98.92%)] py-4 pl-8 text-2xl font-semibold lowercase text-[#2B2B2B]">
                  Bánh bùn
                </div>
              </div>
              <div className="relative h-[calc(50%_-_8px)] w-[calc(50%_-_8px)] bg-[url(/media/1/product2/5.png)]">
                <div className="absolute w-full bg-[linear-gradient(92deg,_rgba(255,_255,_255,_0.50)_0.8%,_rgba(255,_255,_255,_0.38)_63.3%,_rgba(255,_255,_255,_0.00)_98.92%)] py-4 pl-8 text-2xl font-semibold lowercase text-[#2B2B2B]">
                  Kẹp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[#0000001A] pb-5 pt-16">
        <div className="m-auto max-w-screen-lg">
          <span className="font-baloo text-[30px] text-[#505F4E]">
            Danh mục
          </span>
        </div>
      </div>
      <div className="py-10">
        <div className="m-auto max-w-screen-lg">
          <div className="flex h-[620px] flex-wrap gap-x-4 gap-y-3">
            {categories.map((category, i) => {
              if (i < 8) {
                const quantity = products.filter(
                  (product) => product.categoryId === category.id,
                ).length
                return (
                  <div
                    key={category.id}
                    className={`relative h-[calc(50%_-_8px)] w-[calc(25%_-_12px)] rounded bg-cover bg-center bg-no-repeat`}
                    style={{
                      backgroundImage: `url(${category.image})`,
                    }}
                  >
                    <div className="absolute right-4 top-7 z-10 text-white">
                      <p className="text-lg font-semibold">
                        <Link to={`/category/${category.id}`}>
                          {category.name}
                        </Link>
                      </p>
                      <p>{quantity} sản phẩm</p>
                    </div>
                    <div className="absolute h-full w-full bg-black opacity-30" />
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home
