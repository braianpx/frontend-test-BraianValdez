import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Tasks from './pages/Tasks';

const AppRoutes = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={''} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes
