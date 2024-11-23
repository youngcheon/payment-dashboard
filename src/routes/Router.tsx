import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Activity from '../pages/activity';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="/activity" replace />,
      },
      { path: 'dashboard', element: <div>Dashboard</div> },
      {
        path: 'activity',
        element: <Activity />,
      },
      {
        path: 'card',
        element: <div>Card</div>,
      },
      {
        path: 'profile',
        element: <div>Profile</div>,
      },
    ],
  },
]);
