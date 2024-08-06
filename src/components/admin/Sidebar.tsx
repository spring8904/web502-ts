import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/dashboard" className="brand-link">
        <img
          src="/vite.svg"
          alt="AdminLTE Logo"
          className="brand-image"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">Dashboard</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link">
                <i className="nav-icon fa fa-shopping-cart"></i>
                <p>Cửa hàng</p>
              </NavLink>
            </li>
            <li className="nav-header">Quản lý</li>

            <li
              className={
                location.pathname.includes('products')
                  ? 'nav-item menu-open'
                  : 'nav-item'
              }
            >
              <a
                href="#"
                className={
                  location.pathname.includes('products')
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                <i className="nav-icon fas fa-table" />
                <p>
                  Sản phẩm
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/dashboard/products/table" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Danh sách sản phẩm</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/products/add" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Thêm sản phẩm</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li
              className={
                location.pathname.includes('categories')
                  ? 'nav-item menu-open'
                  : 'nav-item'
              }
            >
              <a
                href="#"
                className={
                  location.pathname.includes('categories')
                    ? 'nav-link active'
                    : 'nav-link'
                }
              >
                <i className="nav-icon fas fa-table" />
                <p>
                  Danh mục
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink
                    to="/dashboard/categories/table"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Danh sách danh mục</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dashboard/categories/add" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Thêm danh mục</p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  )
}
export default Sidebar
