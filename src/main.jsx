import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Global.css'
import ShowList from './components/ShowList.jsx'
import EditList from './components/EditList.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/edit',
      element: <EditList />
    },
    {
      path: '/show',
      element: <ShowList />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
