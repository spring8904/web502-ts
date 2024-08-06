import { GitCompareArrows, Heart, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import instance from '../services/customizeAxios'
import { formatMoney } from '../services/default'

const Shop = () => {
  const { id } = useParams()

  const [categories, setCategories] = useState<ICategory[]>([])

  const getCategories = async () => {
    try {
      const { data } = await instance.get('/categories')
      setCategories(data)
    } catch (error) {
      console.error(error)
    }
  }

  const [products, setProducts] = useState<IProduct[]>([])

  const getProducts = async () => {
    try {
      if (!id) {
        const { data } = await instance.get('/products')
        setProducts(data.reverse())
        return
      }

      const { data } = await instance.get(`/products?categoryId=${id}`)
      setProducts(data.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  const getCategoryName = (id: number) => {
    const category = categories.find((c) => c.id == id)
    return category?.name
  }

  useEffect(() => {
    document.title = 'Cửa hàng'
    if (id) document.title = getCategoryName(Number(id)) || 'Cửa hàng'
    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <main>
      <div className="h-40 bg-[linear-gradient(_97deg,_#b5dcb0_5.13%,_rgba(249,_243,_238,_0)_139.8%_)] py-20">
        <div className="m-auto max-w-screen-lg">
          <p className="text-3xl font-bold text-[#505F4E]">Cửa hàng</p>
        </div>
      </div>
      <div className="bg-white pb-16 pt-8">
        <div className="m-auto max-w-screen-lg">
          <div className="custom-scrollbar flex items-center gap-8 overflow-y-auto pb-2 font-sans font-semibold capitalize text-[#505F4E]">
            {categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="flex min-w-48 items-center gap-2 rounded bg-[#D2E8CD] p-2"
                >
                  <img
                    className="h-16 w-16 object-contain mix-blend-darken"
                    src={category.image}
                  />
                  <span>{category.name}</span>
                </Link>
              )
            })}
          </div>
          <div className="mt-10 flex">
            <div className="w-9/12">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="fon text-lg text-[#333]">Sắp xếp theo:</span>
                  <select className="w-56 rounded border border-[#BDBDBD] py-2 pl-4 pr-2 text-[#BDBDBD]">
                    <option>Mới nhất</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <span className="fon text-lg text-[#333]">Hiển thị:</span>
                  <select className="w-56 rounded border border-[#BDBDBD] py-2 pl-4 pr-2 text-[#BDBDBD]">
                    <option>Mặc định</option>
                  </select>
                </div>
              </div>
              <div className="mt-16 flex flex-wrap gap-2">
                {products.map((product) => (
                  <div
                    className="product mb-4 overflow-hidden rounded-t-lg border"
                    key={product.id}
                  >
                    <div className="relative">
                      <img src={product.image} className="h-52 w-52" />
                      <div className="product-hover absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2">
                        <div className="flex items-center gap-3">
                          <div className="rounded bg-green-50 px-3 py-2 text-[#4E7C32] hover:bg-[#4E7C32] hover:text-white">
                            <GitCompareArrows />
                          </div>
                          <div className="rounded bg-green-50 px-3 py-2 text-[#4E7C32] hover:bg-[#4E7C32] hover:text-white">
                            <ShoppingCart />
                          </div>
                          <div className="rounded bg-green-50 px-3 py-2 text-[#4E7C32] hover:bg-[#4E7C32] hover:text-white">
                            <Heart />
                          </div>
                        </div>
                      </div>
                      <div className="product-hover absolute left-3 top-3 hidden">
                        <div className="rounded bg-[#505F4E] px-3 text-white">
                          Bán
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <Link
                        to={`/single-product/${product.id}`}
                        className="block max-w-44 overflow-hidden text-ellipsis whitespace-nowrap font-bold text-[#333]"
                      >
                        {product.name}
                      </Link>
                      <div className="mt-1">
                        <span className="text-[#505F4E]">
                          {formatMoney(product.price)} đ
                        </span>
                      </div>
                      <div className="mt-1">
                        <span className="text-[#505F4E]">
                          {getCategoryName(product.categoryId) || ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/12s ml-9">
              <p className="ml-5 text-3xl font-bold text-[#505F4E]">Danh mục</p>
              <div className="font-san ml-7 mt-6">
                {categories.map((category, i) => {
                  if (i < 4) {
                    return (
                      <div className={i > 0 ? 'mt-4' : ''} key={category.id}>
                        <input type="checkbox" />
                        <span className="ml-2 text-[#333]">
                          {category.name}
                        </span>
                      </div>
                    )
                  }
                })}
              </div>
              <div className="mt-9 h-[262px] w-[213px] bg-[url(/media/2/14.png)]">
                <div className="font-inter flex h-full w-full flex-col justify-between bg-[#0A0A0A66] pb-4 pl-6 pt-8 text-white">
                  <p className="text-lg font-bold">
                    Trồng loại cây yêu thích của riêng bạn
                  </p>
                  <div className="flex items-center gap-2">
                    <span>Mua ngay</span>
                    <i className="fa-regular fa-circle-right" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="ml-2 text-2xl font-bold text-[#333]">
                  Lọc theo giá
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={247}
                    height={24}
                    viewBox="0 0 247 24"
                    fill="none"
                  >
                    <path
                      d="M8.79395 10.5391H237.479V14.963H8.79395V10.5391Z"
                      fill="#4E7C32"
                    />
                    <g filter="url(#filter0_d_0_527)">
                      <path
                        d="M11.9324 16.7326C14.6565 16.7326 16.8648 14.5539 16.8648 11.8663C16.8648 9.17876 14.6565 7.00006 11.9324 7.00006C9.20832 7.00006 7 9.17876 7 11.8663C7 14.5539 9.20832 16.7326 11.9324 16.7326Z"
                        fill="white"
                      />
                    </g>
                    <g filter="url(#filter1_d_0_527)">
                      <path
                        d="M11.9307 14.5696C13.444 14.5696 14.6709 13.3592 14.6709 11.8661C14.6709 10.373 13.444 9.1626 11.9307 9.1626C10.4173 9.1626 9.19043 10.373 9.19043 11.8661C9.19043 13.3592 10.4173 14.5696 11.9307 14.5696Z"
                        fill="#665345"
                      />
                    </g>
                    <g filter="url(#filter2_d_0_527)">
                      <path
                        d="M235.236 16.7325C237.96 16.7325 240.168 14.5538 240.168 11.8663C240.168 9.1787 237.96 7 235.236 7C232.512 7 230.304 9.1787 230.304 11.8663C230.304 14.5538 232.512 16.7325 235.236 16.7325Z"
                        fill="white"
                      />
                    </g>
                    <g filter="url(#filter3_d_0_527)">
                      <path
                        d="M235.234 9.16266C235.776 9.16266 236.306 9.32122 236.757 9.61828C237.207 9.91534 237.559 10.3376 237.766 10.8316C237.973 11.3256 238.028 11.8691 237.922 12.3936C237.816 12.918 237.555 13.3997 237.172 13.7778C236.789 14.1559 236.3 14.4134 235.769 14.5177C235.237 14.622 234.686 14.5685 234.186 14.3638C233.685 14.1592 233.257 13.8127 232.956 13.3681C232.655 12.9235 232.494 12.4008 232.494 11.8661C232.494 11.1491 232.783 10.4615 233.297 9.95449C233.811 9.44749 234.508 9.16266 235.234 9.16266V9.16266Z"
                        fill="#665345"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_0_527"
                        x="0.418617"
                        y="0.418678"
                        width="23.0276"
                        height="22.8953"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_0_527"
                        x="2.60905"
                        y="2.58121"
                        width="18.6432"
                        height="18.5697"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_0_527"
                        x="223.722"
                        y="0.418617"
                        width="23.0276"
                        height="22.8953"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_0_527"
                        x="225.913"
                        y="2.58128"
                        width="18.6432"
                        height="18.5697"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="mx-2 flex justify-between text-[#0D0D0D] opacity-60">
                  <span>Từ 0đ đến 100.000.000đ</span>
                  <span>Lọc</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="ml-2 text-2xl font-bold text-[#333]">
                  Lọc theo kích cỡ
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={247}
                    height={24}
                    viewBox="0 0 247 24"
                    fill="none"
                  >
                    <path
                      d="M8.79395 10.5391H237.479V14.963H8.79395V10.5391Z"
                      fill="#4E7C32"
                    />
                    <g filter="url(#filter0_d_0_527)">
                      <path
                        d="M11.9324 16.7326C14.6565 16.7326 16.8648 14.5539 16.8648 11.8663C16.8648 9.17876 14.6565 7.00006 11.9324 7.00006C9.20832 7.00006 7 9.17876 7 11.8663C7 14.5539 9.20832 16.7326 11.9324 16.7326Z"
                        fill="white"
                      />
                    </g>
                    <g filter="url(#filter1_d_0_527)">
                      <path
                        d="M11.9307 14.5696C13.444 14.5696 14.6709 13.3592 14.6709 11.8661C14.6709 10.373 13.444 9.1626 11.9307 9.1626C10.4173 9.1626 9.19043 10.373 9.19043 11.8661C9.19043 13.3592 10.4173 14.5696 11.9307 14.5696Z"
                        fill="#665345"
                      />
                    </g>
                    <g filter="url(#filter2_d_0_527)">
                      <path
                        d="M235.236 16.7325C237.96 16.7325 240.168 14.5538 240.168 11.8663C240.168 9.1787 237.96 7 235.236 7C232.512 7 230.304 9.1787 230.304 11.8663C230.304 14.5538 232.512 16.7325 235.236 16.7325Z"
                        fill="white"
                      />
                    </g>
                    <g filter="url(#filter3_d_0_527)">
                      <path
                        d="M235.234 9.16266C235.776 9.16266 236.306 9.32122 236.757 9.61828C237.207 9.91534 237.559 10.3376 237.766 10.8316C237.973 11.3256 238.028 11.8691 237.922 12.3936C237.816 12.918 237.555 13.3997 237.172 13.7778C236.789 14.1559 236.3 14.4134 235.769 14.5177C235.237 14.622 234.686 14.5685 234.186 14.3638C233.685 14.1592 233.257 13.8127 232.956 13.3681C232.655 12.9235 232.494 12.4008 232.494 11.8661C232.494 11.1491 232.783 10.4615 233.297 9.95449C233.811 9.44749 234.508 9.16266 235.234 9.16266V9.16266Z"
                        fill="#665345"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_0_527"
                        x="0.418617"
                        y="0.418678"
                        width="23.0276"
                        height="22.8953"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_d_0_527"
                        x="2.60905"
                        y="2.58121"
                        width="18.6432"
                        height="18.5697"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_d_0_527"
                        x="223.722"
                        y="0.418617"
                        width="23.0276"
                        height="22.8953"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_d_0_527"
                        x="225.913"
                        y="2.58128"
                        width="18.6432"
                        height="18.5697"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.29069" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.0862745 0 0 0 0 0.196078 0 0 0 0 0.619608 0 0 0 0.141 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_527"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_527"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="mx-2 flex justify-between text-[#0D0D0D] opacity-60">
                  <span>2 mm đến 50</span>
                  <span>Lọc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Shop
