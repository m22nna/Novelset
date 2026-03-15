import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Navbar from './Components/Navbar.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Favorites from './Components/Favorites.jsx';
import Search from './Components/Search.jsx';
import Layout from './Components/Layout.jsx';
import { Toaster } from 'react-hot-toast';
const routers = createBrowserRouter([{
path: '' , element: <Layout/> , children:[
  {index: true , element: <Home/>},
  {path: 'home' , element: <Navigate to="/" replace />},
  {path: 'contact'  , element: <Contact/>},
  {path: 'footer'  , element: <Footer/>},
  {path: 'navbar'  , element: <Navbar/>},
  {path: 'login'  , element: <Login/>},
  {path:  'register' , element: <Register/>},
  {path: 'favorites'  , element: <Favorites/>},
  {path: 'search' , element: <Search/>},  
  {path: '*' , element: <Navigate to="/" replace />}
]
}])
function App() {
  return (
    <>      
<Toaster/>
  <RouterProvider router={routers}></RouterProvider>

    </>
  )
}

export default App
