import { createBrowserRouter } from 'react-router-dom';

import UnderConstructionPage from './components/common/404';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
// import AboutPage from './pages/AboutPage';
// import Courses from './pages/Courses';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
    //   {
    //     path: '/about',
    //     element: <AboutPage />, 
    //   },
    //   {
    //     path: '/courses',
    //     element: <Courses />, 
    //   },
     
      
      {
        path:"*",
        element: <UnderConstructionPage />, 
      }
     
    ],
  },
]);

export default router;
