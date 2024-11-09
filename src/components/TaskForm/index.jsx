import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { useTasks } from '../../context/TaskContext';
import Button from '../Button';
import useToggleState from '../../hooks/useToggle';
import TextInput from '../TextInput';
import TextArea from '../TextArea';
import CheckBox from '../Checkbox';

const TaskForm = ({ idTaskEdit, taskToEdit, onSubmit, cancelSubmit }) => {
  // Estado para el formulario
  const { toggle: isEdit } = useToggleState(taskToEdit && true || false);
  const [ task, setTask ] = useState({
    title:'',
    description:'',
    complete:false
  });
  const { setTasks } = useTasks();

  // Si se está editando una tarea, se llenan los campos con la tarea existente
  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    // define las posibles acciones a tomar dependiendo si se va a editar o no
    const response = isEdit
    ? await onSubmit(idTaskEdit, task)
    : await onSubmit(task);

  setTasks((prevTasks) =>
    isEdit
      ? prevTasks.map((t) => (t.id === idTaskEdit ? response : t))
      : [...prevTasks, response]
  );
    resetForm();
    alert(isEdit ? 'Se actualizó la tarea' : 'Se creó la tarea');
  };

  const resetForm = useCallback(() => {
    setTask({
      title: '',
      description: '',
      complete: false,
    });
    cancelSubmit();
  }, [cancelSubmit]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  return (
  <div className="flex justify-center items-center w-full h-full fixed left-0 top-0 bg-black-semi bg-opacity-80 z-10">
    <div className="max-w-lg md:max-w-xl md:w-full md:px-10 mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        {isEdit ? 'Editar Tarea' : 'Crear Tarea'}
      </h2>
      <form onSubmit={handleSubmit}>
        <TextInput 
        nameLabel='Título' 
        name={'title'}
        value={task.title}
        handleChange={handleChange}
        placeholder={"Título de la tarea"} 
        style={"mt-1 w-full px-4 py-2"}
        />
        <TextArea
        labelName="Descripción"
        name="description"
        value={task.description}
        handleChange={handleChange}
        placeHolder="Descripción de la tarea."
        style="mt-1 w-full px-4 py-2"
        />
        <div className="mb-4 flex items-center gap-2">
          <CheckBox 
          labelName="Estado"
          name="complete"
          checked={task.complete}
          callback={handleChange}
          />
          <span
            className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
              task.complete ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {task.complete ? 'Completa' : 'Pendiente'}
          </span>
        </div>
        <div className="flex justify-between mt-6 md:justify-end md:gap-5">
          <Button
            name="Cancelar"
            type="button"
            callback={resetForm}
            style="bg-red-500 font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            classButton={'primary'}
          />
          <Button
            name={isEdit ? 'Actualizar' : 'Crear'}
            type="submit"
            style="font-medium focus:outline-none focus:ring-2 focus:ring-primary"
            classButton={'primary'}
          />
        </div>
      </form>
    </div>
  </div>
  );
};

TaskForm.propTypes = {
  taskToEdit: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    complete: PropTypes.bool,
  }),
  idTaskEdit: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  cancelSubmit: PropTypes.func.isRequired,
};

export default TaskForm;
