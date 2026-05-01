import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ShopContextProvider from './ShopContext/Shopcontext.jsx'
import './index.css'
import { store } from "./redux/store";
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <ShopContextProvider>
        <App />
      </ShopContextProvider>
  </BrowserRouter>
  </Provider>
)
