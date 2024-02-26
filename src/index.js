import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './Class/App';
import reportWebVitals from './reportWebVitals';
import store from './Contentapi/Store';
// import Counterfuncomponentprovider from './Provide/Counterfuncomponentprovider';
import Counterfuncomponentprovider from './Provide/counterclassprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // normal 
  // <React.StrictMode>
  
  //   <store.Provider value={{
  //     counter:0
  //   }}>
  //       <App />
  //   </store.Provider>
  // </React.StrictMode>
  //provider file add
  // *************** function 
  // <React.StrictMode>
  // <Counterfuncomponentprovider>
  // <App />
  // </Counterfuncomponentprovider>

  // ****************8 Class

  <React.StrictMode>

<Counterfuncomponentprovider>
  <App />
 </Counterfuncomponentprovider>
 
      
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
