import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import SinglePlayer from './pages/SinglePlayer/SinglePlayer'
import MultiPlayer from './pages/MultiPlayer/MultiPlayer'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/multiplayer",
    element:<MultiPlayer/>
  },
  {
    path:"/singleplayer",
    element:<SinglePlayer/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
