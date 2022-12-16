import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './components/LoginComponent';
import { PropertiesDemo } from './components/PropertiesDemo';
import { LoginClassComponent } from './class-components/LoginClassComponent';
import { ClassDataBinding } from './class-components/ClassDataBinding';
import { ClassApiDemo } from './class-components/ClassApiDemo';

import { FormikDemo } from './components/FormikDemo';
import { YupValidation } from './components/YupValidation';
import { ValidationComponent } from './components/ValidationComponent';
import { Tutorial } from './components/Tutorial';
import { ShoppingIndex } from './Shopping-site/ShoppingIndex';
import { CookiesProvider } from 'react-cookie'
import { HdfcIndex } from './HdfcBank/HdfcIndex';
import { IshopIndex } from './ishop/IshopIndex';
import { ProductsIndex } from './CRUD/ProductsIndex';
import { MaterialDemo } from './Material-Design/MaterialDemo';
import { HooksDemo } from './components/HooksDemo';
import { ContextDemo } from './components/ContextDemo';
import { ShoppingCart } from './components/ShoppingCart';
import { ClassBinding } from './components/ClassBinding';
import { DataBinding } from './components/DataBinding';
import { Shopping } from './components/Shopping';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
  <ShoppingIndex />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
