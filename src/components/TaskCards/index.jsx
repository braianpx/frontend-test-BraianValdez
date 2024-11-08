import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/index'; 
import Loading from '../Loading';
import { useState } from 'react';
import Filters from '../Filters';

const TaskCards = ({ tasks, loading, error, onFilter }) => {
  const [ filterTask, setFilterTask ] = useState([]);

  const applyFilters = (value) => {
    setFilterTask(value);
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-wrap justify-center gap-8 p-4 mb-14">
      <Filters tasks={tasks} setFiltered={applyFilters} onFilter={onFilter} />
      { filterTask[0] ?
        filterTask?.map((task) => (
          <TaskCard 
            key={task.id} // Asegúrate de que cada tarea tenga un `id` único
            id={task.id}
            title={task.title}
            description={task.description}
            complete={task.complete}
          />
        ))
        :
        <p>No se encontraron tareas.</p>
      }
    </section>
  );
}

TaskCards.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onFilter: PropTypes.bool,
}

export default TaskCards;
