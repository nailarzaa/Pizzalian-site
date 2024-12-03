import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App.jsx'
import '../src/css/style.css'
import { ProductProvider } from './context/ProductContext.jsx'
import { LangContext } from './context/LangContext.jsx'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from 'react-bootstrap'


createRoot(document.getElementById('root')).render(
  <StrictMode>

 
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>

  </StrictMode>
)
