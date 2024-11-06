import TaskCards from "../../components/TaskCards";
import { useTasks } from "../../context/TaskContext";

const Tasks = () => {
  const { tasks, error, loading } = useTasks();
  return (
    <section>
      <TaskCards tasks={tasks} error={error} loading={loading} />
    </section>
  );
};

export default Tasks;