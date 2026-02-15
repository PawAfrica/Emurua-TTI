import { createBrowserRouter } from 'react-router-dom';

import UnderConstructionPage from './components/common/404';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Courses from './pages/Courses';
import Tenders from './pages/Tenders';
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
      {
        path: '/courses',
        element: <Courses />, 
      },
      {
        path: '/tenders',
        element: <Tenders />, 
      },
     
      
      {
        path:"*",
        element: <UnderConstructionPage />, 
      }
     
    ],
  },
]);

export default router;
