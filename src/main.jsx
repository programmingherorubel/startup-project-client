import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './Components/routes'
import './index.css'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
    <ToastContainer />
  </AuthProvider>
    
)
