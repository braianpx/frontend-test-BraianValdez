import { useState } from 'react';

function useToggleState(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);

  const toggleSwitch = () => {
    setToggle(prev => !prev);
  };


  return { toggle, toggleSwitch };
}

export default useToggleState;
