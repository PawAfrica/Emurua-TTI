import { createBrowserRouter } from 'react-router-dom';

import UnderConstructionPage from './components/common/404';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Courses from './pages/Courses';
import Tenders from './pages/Tenders';
import About from './pages/About';
import Charter from './pages/Charter';
import Governance from './pages/Governance';
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
      {
        path: '/about',
        element: <About />, 
      },
      {
        path: '/courses',
        element: <Courses />, 
      },
       {
        path: '/charter',
        element: <Charter />, 
      },
        {
        path: '/governance',
        element: <Governance />, 
      },
      {
        path: '/tenders',
        element: <Tenders />, 
      },
      // {
      //   path: '/admission',
      //   element: <Admission />, 
      // },
     
      
      {
        path:"*",
        element: <UnderConstructionPage />, 
      }
     
    ],
  },
]);

export default router;
