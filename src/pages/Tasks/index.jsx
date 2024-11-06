import TaskCards from "../../components/TaskCards";
import { useTasks } from "../../context/TaskContext";

const Tasks = () => {
  const { tasks, error, loading } = useTasks();
  return (
    <main>
      <TaskCards tasks={tasks} error={error} loading={loading} />
    </main>
  );
};

export default Tasks;