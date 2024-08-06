import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'
import instance from '../../../services/customizeAxios'

const schema = z.object({
  name: z.string().min(3),
  image: z.string().url(),
})

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>({ resolver: zodResolver(schema) })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<ICategory> = async (data) => {
    try {
      const res = await instance.post('/categories', data)
      if (res) {
        navigate('/dashboard/categories')
        toast.success('Thêm danh mục thành công')
      }
    } catch (error) {
      toast.error('Thêm danh mục thất bại')
      console.error(error)
    }
  }
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <Card.Header className="fs-3">Thêm danh mục</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Tên danh mục:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập tên"
                    {...register('name')}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.name?.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Ảnh danh mục:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập đường dẫn ảnh"
                    {...register('image')}
                  />
                  {errors.name && (
                    <p className="text-danger">{errors.image?.message}</p>
                  )}
                </Form.Group>

                <div className="d-flex justify-content-end gap-2">
                  <Button variant="secondary" onClick={() => navigate(-1)}>
                    Quay lại
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
export default AddCategory
