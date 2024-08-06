import { useState, useEffect } from 'react'
import instance from '../../services/customizeAxios'
import { Link } from 'react-router-dom'

const DashBoard = () => {
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

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <h3>{products.length}</h3>
            <p>Sản phẩm</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag" />
          </div>
          <Link to="products" className="small-box-footer">
            Chi tiết <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <h3>{categories.length}</h3>
            <p>Danh mục</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars" />
          </div>
          <Link to="categories" className="small-box-footer">
            Chi tiết <i className="fas fa-arrow-circle-right" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
