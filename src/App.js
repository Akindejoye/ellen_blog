import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import Layout from './components/Layout';
import './style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  }
])

const App = () => {
  return (
  <div className='app'>
    <div className='container'>
     <RouterProvider router={router} />
    </div>
  </div>
  );
}

export default App;
