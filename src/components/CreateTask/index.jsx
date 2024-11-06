import { createTask } from '../../services/api';
import TaskForm from '../TaskForm/index';
import Button from '../Button/index';
import {  useEffect } from 'react';
import useToggleState from '../../hooks/useToggle';

const CreateTask = () => {
  const { toggle: mobile, toggleSwitch: switchMovile } = useToggleState(false)
  const { toggle: create, toggleSwitch: switchCreate } = useToggleState(false)

  useEffect(()=>{
    switchMovile(window.innerWidth < 768)
  },[])

  return(
  <section>
        <Button 
          callback={switchCreate}
          classButton={'secondary'} 
          name={'Crear Nueva Tarea'}  
          style={`${mobile ? 'px-4 py-4 text-xl bg-opacity-80' : ''} fixed bottom-4 right-4 bg-opacity-95`}
      />
      {create && <TaskForm cancelSubmit={switchCreate} onSubmit={createTask} />}
  </section>
  )
};
export default CreateTask;