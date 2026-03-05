import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import { BrowserRouter } from 'react-router';
import Header from './UIBlocks/Header/Header.jsx';
import { Provider } from 'react-redux';
import reduxStore from './data/ReduxStore.jsx';
import RoutesComponent from './UIBlocks/Header/RoutesComponent.jsx';
import Footer from './UIBlocks/Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Header></Header>
        <RoutesComponent></RoutesComponent>
        <Footer></Footer>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
