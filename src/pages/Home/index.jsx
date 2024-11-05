import TaskCards from "../../components/TaskCards";
import { useTasks } from "../../context/TaskContext";

const Home = () => {
  const { incompleteTask, error, loading } = useTasks();
  return (
    <>
      <TaskCards tasks={incompleteTask} error={error} loading={loading} />
    </>
  )
};

export default Home;