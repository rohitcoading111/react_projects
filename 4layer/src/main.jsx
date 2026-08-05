import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import './index.css'
import App from './App.jsx'
import { store } from './app/store.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)
