import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'
import instance from '../../../services/customizeAxios'

const schema = z.object({
  name: z.string().min(3),
  price: z.number().gte(0),
  image: z.string().url(),
  categoryId: z.number(),
  shortDesc: z.string().optional(),
  desc: z.string().optional(),
  about: z.string().optional(),
})

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) })

  const navigate = useNavigate()
  const { id } = useParams()

  const getProduct = async () => {
    try {
      const { data } = await instance.get(`/products/${id}`)
      reset(data)
    } catch (error) {
      console.error(error)
    }
  }

  const [categories, setCategories] = useState<ICategory[]>([])

  const getCategories = async () => {
    try {
      const { data } = await instance.get('/categories')
      setCategories(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategories()
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    try {
      const res = await instance.put(`products/${id}`, data)
      if (res) {
        navigate('/dashboard/products')
        toast.success('Sửa sản phẩm thành công')
      }
    } catch (error) {
      toast.error('Sửa sản phẩm thất bại')
      console.error(error)
    }
  }
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={12}>
          <Card>
            <Card.Header className="fs-3">Thêm sản phẩm</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="flex">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Tên sản phẩm:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name?.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Giá:</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Nhập giá"
                        {...register('price', {
                          valueAsNumber: true,
                        })}
                      />
                      {errors.price && (
                        <p className="text-danger">{errors.price?.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Ảnh:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập đường dẫn ảnh"
                        {...register('image')}
                      />
                      {errors.image && (
                        <p className="text-danger">{errors.image?.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mô tả ngắn:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Nhập mô tả ngắn"
                        {...register('shortDesc')}
                      />
                      {errors.image && (
                        <p className="text-danger">
                          {errors.shortDesc?.message}
                        </p>
                      )}
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Danh mục:</Form.Label>
                      <Form.Select
                        {...register('categoryId', {
                          valueAsNumber: true,
                        })}
                      >
                        <option hidden>Chọn danh mục</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </Form.Select>
                      {errors.categoryId && (
                        <p className="text-danger">
                          {errors.categoryId?.message}
                        </p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mô tả:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Nhập mô tả"
                        {...register('desc')}
                      />
                      {errors.desc && (
                        <p className="text-danger">{errors.desc?.message}</p>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Thông tin khác:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Nhập thông tin"
                        {...register('about')}
                      />
                      {errors.about && (
                        <p className="text-danger">{errors.about?.message}</p>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex justify-content-end gap-2">
                  <Button variant="secondary" onClick={() => navigate(-1)}>
                    Quay trở lại
                  </Button>
                  <Button type="submit" variant="primary">
                    Lưu
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default EditProduct
