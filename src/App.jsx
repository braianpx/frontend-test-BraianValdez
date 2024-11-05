import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskCard from './components/TaskCard';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskCard title='HACER LA TAREA' description='HACER LA TAREA DE LA FAC' completed/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
