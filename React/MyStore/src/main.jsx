import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import RoutesComponent from './MyStoreBlocks/Header/RoutesComponent.jsx'
import Header from './MyStoreBlocks/Header/Header.jsx'
import Footer from './MyStoreBlocks/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <main>
        <RoutesComponent></RoutesComponent>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  </StrictMode>,
)
