import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/index'; 

const TaskCards = ({ tasks, loading, error }) => {

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {tasks?.map((task) => (
        <TaskCard 
          key={task?.id} // Asegúrate de que cada tarea tenga un `id` único
          id={task?.id}
          title={task?.title} 
          description={task?.description} 
          completed={task?.completed} 
        />
      ))}
    </div>
  );
}

TaskCards.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default TaskCards;
