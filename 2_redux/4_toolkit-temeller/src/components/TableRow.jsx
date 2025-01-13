import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import FormModal from "./FormModal";
import { useState } from "react";

const TableRow = ({ task }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    // kullancı onaylamazsa fonksiyonu durdur
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // reducer'a görev silme haberi gönder
    dispatch(deleteTask(task.id));
  };

  return (
    <>
      <tr>
        <td>{task.title}</td>

        <td>{task.author}</td>

        <td>{task.assigned}</td>

        <td>
          {new Date(task.end_date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
          })}
        </td>

        <td className="d-flex">
          <Button className="me-1" size="sm" onClick={handleOpen}>
            Edt
          </Button>

          <Button variant="danger" size="sm" onClick={handleDelete}>
            Sil
          </Button>
        </td>
      </tr>

      <FormModal show={show} handleClose={handleClose} task={task} />
    </>
  );
};

export default TableRow;
