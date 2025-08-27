import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '/src/css/App.css'
import Navbar from './Components/navbar/Navbar'
import Layout from './Components/layout/Layout'
import Home from './Components/home/Home'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Portfolio from './Components/portfolio/Portfolio'
import Error from './Components/error/Error'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {  

  let router = createBrowserRouter([
      {path: '/', element: <Layout/>, children:[
        {index:true ,element: <Home/> },
        {path: 'about', element: <About/> },
        {path: 'contact', element: <Contact/> },
        {path: 'portfolio', element: <Portfolio/>},  
      ]},
      {path: '*', element: <Error/> }, 
    ])

  return (  
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
