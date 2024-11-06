import { createTask } from '../../services/api';
import TaskForm from '../TaskForm/index';
import Button from '../Button/index';
import useToggleState from '../../hooks/useToggle';

const CreateTask = () => {
  const { toggle: create, toggleSwitch: switchCreate } = useToggleState(false)

  return(
  <section>
        <Button 
          callback={switchCreate}
          classButton={'secondary'} 
          name={'Crear Nueva Tarea'}  
          style={`fixed bottom-4 right-4 bg-opacity-95`}
      />
      {create && <TaskForm cancelSubmit={switchCreate} onSubmit={createTask} />}
  </section>
  )
};
export default CreateTask;