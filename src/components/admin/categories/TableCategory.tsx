import { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import instance from '../../../services/customizeAxios'
import ModalDeleteCategory from './ModalDeleteCategory'

const TableCategory = () => {
  const [categories, setCategories] = useState<IProduct[]>([])

  const getCategories = async () => {
    try {
      const { data } = await instance.get('/categories')
      setCategories(data.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  const [products, setProducts] = useState<IProduct[]>([])

  const getProducts = async () => {
    try {
      const { data } = await instance.get('/products')
      setProducts(data.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategories()
    getProducts()
  }, [])

  const [isShowModalDelete, setIsShowModalDelete] = useState<boolean>(false)
  const [categoryDelete, setCategoryDelete] = useState<CategoryDelete>(
    {} as CategoryDelete,
  )

  return (
    <>
      <Alert className="flex justify-between">
        <h1 className="text-2xl font-semibold">Danh sách danh mục</h1>
        <Link className="btn btn-primary" to="/dashboard/categories/add">
          Thêm danh mục
        </Link>
      </Alert>
      <Table bordered striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Số lượng sản phẩm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, i) => {
            const quantity = products.filter(
              (product) => product.categoryId === category.id,
            ).length
            return (
              <tr key={category.id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={category.image}
                    style={{
                      width: '64px',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </td>
                <td className="font-semibold">{category.name}</td>
                <td>{quantity}</td>
                <td>
                  <div className="d-flex justify-content-start gap-2">
                    <Link
                      className="btn btn-warning"
                      to={`/dashboard/categories/edit/${category.id}`}
                    >
                      Sửa
                    </Link>
                    <Button
                      onClick={() => {
                        setIsShowModalDelete(true)
                        setCategoryDelete({ ...category, quantity })
                      }}
                      variant="danger"
                      disabled={quantity > 0}
                    >
                      Xóa
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

      <ModalDeleteCategory
        show={isShowModalDelete}
        handleClose={() => setIsShowModalDelete(false)}
        update={getCategories}
        categoryDelete={categoryDelete}
      />
    </>
  )
}
export default TableCategory
