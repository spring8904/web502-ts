import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import instance from '../../../services/customizeAxios'

type Props = {
  show: boolean
  handleClose: () => void
  productDelete: ProductDelete
  update: () => void
}

const ModalDeleteProduct = ({
  show,
  handleClose,
  productDelete,
  update,
}: Props) => {
  const handleDelete = async () => {
    try {
      if (productDelete.id) {
        await instance.delete(`products/${productDelete.id}`)
        toast.success('Xóa sản phẩm thành công')
        handleClose()
        update()
      }
    } catch (error) {
      toast.error('Xóa sản phẩm thất bại')
      console.error(error)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc chắn muốn xóa sản phẩm &quot;{productDelete.name}
        &quot;
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDeleteProduct
