import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tasks from './pages/Tasks';
import Home from './pages/Home';
import CreateTask from './components/CreateTask';

const AppRoutes = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
      <CreateTask />
    </Router>
  );
}

export default AppRoutes
