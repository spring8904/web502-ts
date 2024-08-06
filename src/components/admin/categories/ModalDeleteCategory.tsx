import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import instance from '../../../services/customizeAxios'

type Props = {
  show: boolean
  handleClose: () => void
  categoryDelete: CategoryDelete
  update: () => void
}

const ModalDeleteCategory = ({
  show,
  handleClose,
  categoryDelete,
  update,
}: Props) => {
  const handleDelete = async () => {
    try {
      if (categoryDelete.id && categoryDelete.quantity === 0) {
        await instance.delete(`categories/${categoryDelete.id}`)
        toast.success('Xóa danh mục thành công')
        update()
      } else toast.error('Xóa danh mục thất bại')
      handleClose()
    } catch (error) {
      toast.error('Xóa danh mục thất bại')
      console.error(error)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhân xóa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Bạn có chắc chắn muốn xóa danh mục &quot;{categoryDelete.name}
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

export default ModalDeleteCategory
