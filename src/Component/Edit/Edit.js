import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { EditTask } from '../../redux/actions/TodoAction';

const Edit = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [updateTask, setUpdateTask] = useState(todo.description)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const handlEdit = () => {
    dispatch(EditTask(todo.id, updateTask))
    handleClose()
  }

  return (
    <div>

      <FaEdit onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="text" className='form-control' onChange={(e) => setUpdateTask(e.target.value)} value={updateTask} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
