import { Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayout from './components/admin/AdminLayout'
import AddCategory from './components/admin/categories/AddCategory'
import EditCategory from './components/admin/categories/EditCategory'
import TableCategory from './components/admin/categories/TableCategory'
import DashBoard from './components/admin/DashBoard'
import AddProduct from './components/admin/products/AddProduct'
import EditProduct from './components/admin/products/EditProduct'
import TableProduct from './components/admin/products/TableProduct'
import ClientLayout from './components/client/ClientLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Shop from './pages/Shop'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:id" element={<Shop />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="products">
            <Route index element={<Navigate to="table" />} />
            <Route path="table" element={<TableProduct />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Route>
          <Route path="categories">
            <Route index element={<Navigate to="table" />} />
            <Route path="table" element={<TableCategory />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<EditCategory />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
    </>
  )
}
export default App
