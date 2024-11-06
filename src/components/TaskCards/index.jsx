import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/index'; 
import Loading from '../Loading';

const TaskCards = ({ tasks, loading, error }) => {

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-wrap justify-center gap-8 p-4">
      {tasks?.map((task) => (
        <TaskCard 
          key={task?.id} // Asegúrate de que cada tarea tenga un `id` único
          id={task?.id}
          title={task?.title} 
          description={task?.description} 
          complete={task?.complete} 
        />
      ))}
    </section>
  );
}

TaskCards.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default TaskCards;
