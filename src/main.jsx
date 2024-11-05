import { createRoot } from 'react-dom/client'
import { TaskProvider } from './context/TaskContext'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <TaskProvider>
      <App />
    </TaskProvider>,
)
