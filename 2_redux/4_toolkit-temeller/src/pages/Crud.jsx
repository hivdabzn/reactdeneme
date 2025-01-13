import { Button, Container, Stack } from "react-bootstrap";
import TaskTable from "../components/TaskTable";
import FormModal from "../components/FormModal";
import { useState } from "react";

const Crud = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="vh-100">
      <Container>
        <Stack className="align-items-end my-4">
          <Button onClick={handleOpen}>Yeni Görev Ekle</Button>
        </Stack>

        <FormModal show={show} handleClose={handleClose} />

        <TaskTable />
      </Container>
    </div>
  );
};

export default Crud;
