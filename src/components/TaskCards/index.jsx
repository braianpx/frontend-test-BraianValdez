import PropTypes from 'prop-types';
import TaskCard from '../TaskCard/index'; 
import Loading from '../Loading';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';

const TaskCards = ({ tasks, loading, error }) => {
  const [ query, setQuery ] = useState('');
  const [ filterTask, setFilterTask ] = useState([]);

  useEffect(()=>{
    setFilterTask(tasks)
  },[tasks]);

  const searchTask = (value) => {
    setQuery(value);
    setFilterTask( tasks?.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    ))
  }

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="flex flex-wrap justify-center gap-8 p-4">
      <SearchBar query={query} onSearch={searchTask} />
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
}

export default TaskCards;
