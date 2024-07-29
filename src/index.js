import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './Context/AppContext';
import ScrollToTop from './Components/ScrollTop';
import  { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <ScrollToTop />
      <App/>
      <Toaster toastOptions = {{
          className:"",
          style:{
            "font-size": "20px",
            "padding" : "16px",
            "font-weight" : "600",
              },
            }}/>
    </AppContextProvider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
