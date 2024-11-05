import TaskCards from "../../components/TaskCards";
import { useTasks } from "../../context/TaskContext";

const Tasks = () => {
  const { tasks, error, loading } = useTasks();
  return (
    <>
      <TaskCards tasks={tasks} error={error} loading={loading} />
    </>
  );
};

export default Tasks