import TaskCards from "../../components/TaskCards";
import { useTasks } from "../../context/TaskContext";

const Home = () => {
  const { incompleteTask, error, loading } = useTasks();
  return (
    <section>
      <TaskCards tasks={incompleteTask} error={error} loading={loading} />
    </section>
  )
};

export default Home;