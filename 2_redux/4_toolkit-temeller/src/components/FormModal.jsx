import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/crudSlice";

const FormModal = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfa yenilemeyi önle
    e.preventDefault();

    // formdata class'ından örnek
    const formData = new FormData(e.target);

    // inputlardaki verileri nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a haber gönder
    if (!task) {
      // düzenlenicek task yoksa ekleme haberi gönder
      dispatch(addTask(taskData));
    } else {
      // düzenlenicek task varsa güncelleme haberi gönder
      dispatch(updateTask({ id: task.id, ...taskData }));
    }

    // modalı kapat
    handleClose();
  };

  return (
    <Modal centered show={show} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Görevi Düzenle" : "Görev Oluştur"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((item) => (
            <Form.Group className="mb-3" controlId={item.name}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control
                name={item.name}
                type={item.type}
                defaultValue={task && task[item.name]}
              />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button variant="primary" type="submit">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
