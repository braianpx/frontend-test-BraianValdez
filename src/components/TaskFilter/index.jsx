import PropTypes from 'prop-types';
import { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('all'); // Estado del filtro: all, completed, pending

  // Función para manejar el cambio de filtro
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <section className='flex sm:justify-start justify-center bg-white'>
      <select value={filter} onChange={handleFilterChange} className="px-1 py-1.5 border rounded text-base text-black-semi font-normal bg-white">
        <option value="all">Todas</option>
        <option value="complete">Completadas</option>
        <option value="incomplete">Pendientes</option>
      </select>
    </section>
  );
};

TaskFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
}

export default TaskFilter;
