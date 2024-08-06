import { Minus, Plus } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../services/customizeAxios'
import { formatMoney } from '../services/default'

const SingleProduct = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<IProduct>({} as IProduct)

  const getProduct = async () => {
    try {
      const { data } = await instance.get(`/products/${id}`)
      setProduct({ ...data, price: formatMoney(data.price) })
    } catch (error) {
      console.error(error)
    }
  }
  const [category, setCategory] = useState<ICategory>({} as ICategory)

  const getCategory = async (id: number) => {
    try {
      const { data } = await instance.get(`/categories/${id}`)
      setCategory(data)
    } catch (error) {
      console.error(error)
    }
  }

  const [count, setCount] = useState(0)

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (product.categoryId) {
      getCategory(product.categoryId)
    }
  }, [product.categoryId])

  useEffect(() => {
    document.title = product.name
  }, [product.name])
  return (
    <main className="bg-white pb-20 pt-28">
      <div className="m-auto max-w-screen-lg">
        <div className="flex">
          <div className="w-1/2">
            <img
              src={product.image}
              className="h-[355px] w-[355px] object-contain"
            />
            <div className="mt-14 flex">
              <img className="h-[106px] w-[106px]" src={product.image} />
              <img className="ml-5 h-[106px] w-[106px]" src={product.image} />
              <img className="ml-5 h-[106px] w-[106px]" src={product.image} />
            </div>
          </div>
          <div className="w-1/2 font-sans">
            <p className="text-sm font-bold uppercase text-[#4E7C32]">
              {category.name}
            </p>
            <h1 className="mt-5 text-[44px] font-bold text-[#1D2025]">
              {product.name}
            </h1>
            <p className="mt-6 font-medium text-[#68707D]">
              {product.shortDesc}
            </p>
            <div className="mt-8 flex items-center">
              <div className="text-3xl font-bold text-[#1D2025]">
                {product.price} đ
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex w-[157px] justify-between rounded-lg bg-[#F7F8FD] px-[10px] py-6">
                <div
                  className="font-bold text-black"
                  onClick={() => {
                    if (count > 0) {
                      setCount((c) => c - 1)
                    }
                  }}
                >
                  <Minus />
                </div>
                <div className="font-bold text-black">{count}</div>
                <div
                  className="font-bold text-black"
                  onClick={() => setCount((c) => c + 1)}
                >
                  <Plus />
                </div>
              </div>
              <div className="ml-4 rounded-lg bg-[#4E7C32] p-[17px_77px] text-white shadow-[0px_8px_10px_0px_#FFEDE0]">
                <i className="fa-solid fa-cart-shopping" />
                <span className="font-bold">Thêm vào giỏ hàng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="font-inter mt-28">
          <p className="text-3xl text-[#4E7C32]">Mô tả</p>
          <p className="mt-1 text-xl font-light text-[#665345]">
            {product.desc}
          </p>
        </div>
        <div className="font-inter mt-8">
          <p className="text-3xl text-[#4E7C32]">Thông tin khác</p>
          <p className="mt-1 text-xl font-light text-[#665345]">
            {product.about}
          </p>
        </div>
        <div className="mt-14">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={product.image} className="h-44 w-44" />
              <div className="ml-4">
                <div className="flex">
                  <img src="/media/3/star-1.png" />
                  <img src="/media/3/star-1.png" />
                  <img src="/media/3/star-1.png" />
                  <img src="/media/3/star-1.png" />
                  <img src="/media/3/star-1.png" />
                </div>
                <p className="text-center text-3xl text-[#4E7C32]">
                  5.0{' '}
                  <span className="lh text-base text-[#00000099]">(388)</span>
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-xl bg-[#4E7C32] px-4 py-2 text-sm text-white">
                Viết đánh giá
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center text-sm">
            <span className="text-black">1</span>
            <img className="ml-1" src="/media/3/star-2.png" />
            <div className="ml-2 h-3 w-[447px] rounded-sm bg-[#A2A0A0]" />
            <span className="ml-1 text-[#00000099]">(388)</span>
          </div>
          <div className="mt-1 flex items-center text-sm">
            <span className="text-black">2</span>
            <img className="ml-1" src="/media/3/star-2.png" />
            <div className="ml-2 h-3 w-[69px] rounded-sm bg-[#D9D9D9]" />
          </div>
          <div className="mt-1 flex items-center text-sm">
            <span className="text-black">3</span>
            <img className="ml-1" src="/media/3/star-2.png" />
            <div className="ml-2 h-3 w-[69px] rounded-sm bg-[#D9D9D9]" />
          </div>
          <div className="mt-1 flex items-center text-sm">
            <span className="text-black">4</span>
            <img className="ml-1" src="/media/3/star-2.png" />
            <div className="ml-2 h-3 w-[69px] rounded-sm bg-[#D9D9D9]" />
          </div>
          <div className="mt-1 flex items-center text-sm">
            <span className="text-black">5 </span>
            <img className="ml-1" src="/media/3/star-2.png" />
            <div className="ml-2 h-3 w-[69px] rounded-sm bg-[#D9D9D9]" />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-end">
            <div className="w-[calc(50%_-_50px)]">
              <div className="flex items-center">
                <p className="text-[#4E7C32]">Aman gupta</p>
                <div className="ml-6 flex items-center">
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                </div>
              </div>
              <p className="mt-1 text-sm text-[#665345]">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="mt-6 flex gap-[100px]">
            <div className="w-[calc(50%_-_50px)]">
              <div className="flex items-center">
                <p className="text-[#4E7C32]">Aman gupta</p>
                <div className="ml-6 flex items-center">
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                </div>
              </div>
              <p className="mt-1 text-sm text-[#665345]">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
            <div className="w-[calc(50%_-_50px)]">
              <div className="flex items-center">
                <p className="text-[#4E7C32]">Aman gupta</p>
                <div className="ml-6 flex items-center">
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                  <img src="/media/3/star-3.png" />
                </div>
              </div>
              <p className="mt-1 text-sm text-[#665345]">
                I've been using this cleanser for about five or six months now
                and my acne is almost completely gone. I really struggled for
                years with my skin and tried everything possible but this is the
                only thing that managed to clear up my skin. 100% recommend and
                will continue to use is for sure.
              </p>
            </div>
          </div>
          <div className="mt-9 text-center">
            <button className="rounded-lg bg-[#4E7C32] px-3 py-1 text-sm text-white">
              Xem tất cả
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default SingleProduct
