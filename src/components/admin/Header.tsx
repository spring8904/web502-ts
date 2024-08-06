import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary main-header">
      <Nav className="me-auto">
        <NavLink className="nav-link" to="/">
          Trang chủ
        </NavLink>
        <NavLink className="nav-link" to="/shop">
          Cửa hàng
        </NavLink>
        <NavDropdown title="Sản phẩm">
          <Link className="dropdown-item" to="/dashboard/products">
            Danh sách sản phẩm
          </Link>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="/dashboard/products/add">
            Thêm sản phẩm
          </Link>
        </NavDropdown>
        <NavDropdown title="Danh mục">
          <Link className="dropdown-item" to="/dashboard/categories">
            Danh sách danh mục
          </Link>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="/dashboard/categories/add">
            Thêm danh mục
          </Link>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default Header
