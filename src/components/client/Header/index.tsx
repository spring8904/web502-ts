import { ChevronDown, Search, ShoppingBag, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header
      style={{
        backgroundImage:
          'linear-gradient(90deg, #4e7c32 17.33%, rgba(102, 83, 69, 0) 175.13%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.2)',
      }}
      className="h-40"
    >
      <div className="m-auto flex max-w-screen-lg items-center justify-end border-b border-[#E3E3E3] pb-3 pt-6">
        <div>
          <div className="relative h-11 w-[525px]">
            <input
              type="text"
              className="h-full w-full rounded py-3 pl-8"
              placeholder="Tìm kiếm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-slate-500" />
          </div>
        </div>
        <div className="ml-24 flex items-center justify-between text-white">
          <span>Vi</span>
          <ChevronDown />
        </div>
        <div className="ml-28 flex items-center justify-between text-white">
          <User />
          <span>Tài khoản</span>
        </div>
        <div className="ml-8 flex items-center justify-between text-white">
          <div className="relative mr-1">
            <ShoppingBag />
          </div>
          <span>Giỏ hàng</span>
        </div>
      </div>
      <div className="m-auto mt-4 flex max-w-screen-lg items-center justify-center gap-6 text-white">
        <div className="flex items-center gap-1">
          <Link to={'/'} className="whitespace-nowrap text-xs font-semibold">
            Trang chủ
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Link
            to={'/shop'}
            className="whitespace-nowrap text-xs font-semibold"
          >
            Cửa hàng
          </Link>
        </div>
        <div className="menu-item relative flex items-center gap-1">
          <span className="whitespace-nowrap text-xs font-semibold">
            Trang quản trị
          </span>
          <ChevronDown />
          <div className="sub-menu absolute top-5 z-20 hidden bg-white text-xs text-[#665345]">
            <ul className="list-disc p-4 pl-8">
              <li>
                <Link to={'/dashboard/products'}>Sản phẩm</Link>
              </li>
              <li className="mt-3">
                <Link to={'/dashboard/categories'}>Danh mục</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="menu-item relative flex items-center gap-1">
          <span className="whitespace-nowrap text-xs font-semibold">Auth</span>
          <ChevronDown />
          <div className="sub-menu absolute top-5 z-20 hidden bg-white text-xs text-[#665345]">
            <ul className="list-disc p-4 pl-8">
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
              <li className="mt-3">
                <Link to={'/register'}>Register</Link>
              </li>
              <li className="mt-3">
                <Link to={'/logout'}>Logout</Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </header>
  )
}
export default Header
