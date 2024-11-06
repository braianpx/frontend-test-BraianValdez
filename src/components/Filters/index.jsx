import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import TaskFilter from '../TaskFilter';

const Filters = ({ tasks, setFiltered }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    applyFilters(); // Aplica los filtros combinados al cargar tareas o cambiar filtros
  }, [tasks, query, filter]);

  const applyFilters = () => {
    let updatedTasks = tasks;
    // Filtro por búsqueda de texto
    if (query) {
      updatedTasks = updatedTasks.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    // Filtro por estado de la tarea
    if (filter === 'complete') {
      updatedTasks = updatedTasks.filter((task) => task.complete);
    } else if (filter === 'incomplete') {
      updatedTasks = updatedTasks.filter((task) => !task.complete);
    }

    setFiltered(updatedTasks);
  };

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
      <div className="flex sm:flex-row gap-4 w-full justify-center flex-col">
        <SearchBar query={query} onSearch={handleSearch} />
        <TaskFilter onFilterChange={handleFilterChange} />
      </div>
  );
};

Filters.propTypes = {
  tasks: PropTypes.array.isRequired,
  setFiltered: PropTypes.func.isRequired,
};

export default Filters;
