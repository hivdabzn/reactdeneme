import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudReducer);

  console.log(tasks);

  return (
    <Table striped hover bordered responsive variant="dark">
      <thead>
        <tr>
          <th>Görev</th>
          <th>Yazan</th>
          <th>Atanan</th>
          <th>Tarih</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TableRow key={task.id} task={task} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
