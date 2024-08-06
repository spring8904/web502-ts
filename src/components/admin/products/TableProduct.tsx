import { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import instance from '../../../services/customizeAxios'
import ModalDeleteProduct from './ModalDeleteProduct'
import { formatMoney } from '../../../services/default'

const TableProduct = () => {
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
    getProducts()
    getCategories()
  }, [])

  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false)
  const [productDelete, setProductDelete] = useState<ProductDelete>(
    {} as ProductDelete,
  )

  return (
    <>
      <Alert className="flex justify-between">
        <h1 className="text-2xl font-semibold">Danh sách sản phẩm</h1>
        <Link className="btn btn-primary" to="/dashboard/products/add">
          Thêm sản phẩm
        </Link>
      </Alert>

      <Table hover bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product.id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={product.image}
                  style={{
                    width: '64px',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </td>
              <td className="font-semibold">{product.name}</td>
              <td>{formatMoney(product.price)} đ</td>
              <td>{getCategoryName(product.categoryId)}</td>
              <td>
                <div className="d-flex gap-2">
                  <Link
                    className="btn btn-warning"
                    to={`/dashboard/products/edit/${product.id}`}
                  >
                    Sửa
                  </Link>
                  <Button
                    onClick={() => {
                      setIsShowModalDelete(true)
                      setProductDelete(product)
                    }}
                    variant="danger"
                  >
                    Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalDeleteProduct
        show={isShowModalDelete}
        handleClose={() => setIsShowModalDelete(false)}
        update={getProducts}
        productDelete={productDelete}
      />
    </>
  )
}
export default TableProduct
