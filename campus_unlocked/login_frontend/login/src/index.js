import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/homepage'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import MainWebpage from './components/mainwebpage'
import MustVisit from './components/mustvisitplaces'
import News from './components/newsletter'
import OAT_App from "./pages/oat"
import Audi_App from "./pages/audi"
import CCD_APP from './pages/ccd';
import MIO_APP from './pages/mamamio';
import Nursery_App from './pages/nursery';
import RM_App from './pages/rm';
import Hock_APP from './pages/hockey';
import Lib_APP from './pages/library';
import Ten_APP from './pages/tennis';
import Swim_APP from './pages/swim';
import Stad_APP from './pages/stad';
import Pro_APP from './pages/pronite';
import MT_APP from './pages/mt';
import NS_APP from './pages/newsac';
import Doaa_app from './pages/doaacant';
import Flight_app from './pages/flight';
import OS_APP from './pages/oldsac';
import Out_app from './pages/outreach';
import Park_app from './pages/park67';
import Ox_app from './pages/oxdtn';
import LHC_APP from './pages/lhc';
import ImageUpload from './components/uploader'
import Near from './components/nearby'
import Trending_photos from './components/trending'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/signup',
    element:<SignUp/>,
  },
  
  {
    path:'/signin',
    element:<Login/>,
  },
  {
    path:'/mainpage',
    element:<MainWebpage/>,
  },
  {
    path:'/news',
    element:<News/>,
  },
  {
    path:'/mustvisit',
    element:<MustVisit/>,
  },
  {
    path:'/lhc',
    element:<LHC_APP/>,
  },
  {
      path: "/oat",
      element: <OAT_App />,
    },
    {
      path: "/audi",
      element: <Audi_App />,
    },
    {
      path: "/rm",
      element: <RM_App />,
    },
    {
      path: "/lib",
      element: <Lib_APP />,
    },
    {
      path: "/ccd",
      element: <CCD_APP />,
    },
    {
      path: "/mio",
      element: <MIO_APP />,
    },
    {
      path: "/nursery",
      element: <Nursery_App/>,
    },
    
    {
      path: "/tennis",
      element: <Ten_APP />,
    },
    {
      path: "/swim",
      element: <Swim_APP />,
    },
    {
      path: "/stad",
      element: <Stad_APP />,
    },
    {
      path: "/pro",
      element: <Pro_APP />,
    },
    {
      path: "/mt",
      element: <MT_APP />,
    },  
    {
      path: "/ns",
      element: <NS_APP />,
    },
    {
      path: "/flight",
      element: <Flight_app />,
    },
    {
      path: "/doaa",
      element: <Doaa_app />,
    },
    {
      path: "/os",
      element: <OS_APP />,
    },
    {
      path: "/out",
      element: <Out_app />,
    },
    {
      path: "/park",
      element: <Park_app />,
    },
    {
      path:"/ox",
      element:<Ox_app/>
    },
    {
      path:"/hock",
      element:<Hock_APP/>
    },
    {
      path:"/upload",
      element:<ImageUpload/>
    },
    {
      path:"/near",
      element:<Near/>
    },
    {
      path:"/trending",
      element:<Trending_photos/>
    }



])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
