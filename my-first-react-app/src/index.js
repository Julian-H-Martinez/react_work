import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SomeClassComponent from "./components/SomeClassComponent";
import PersonCard from "./components/PersonCard";
import LightSwitch from "./components/LightSwitch";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*  <SomeClassComponent />*/}
    {/*  <SomeClassComponent header = {"Header Prop"}>*/}
    {/*      <p>This is a child</p>*/}
    {/*      <h4>I too am a child</h4>*/}
    {/*  </SomeClassComponent>*/}
    {/*  <div>*/}
    {/*      <div>*/}
    {/*          <PersonCard firstName = "Jessica" lastName = {"Martinez"} age = {40} hairColor = "autumn red" />*/}
    {/*      </div>*/}
    {/*      <div>*/}
    {/*          <PersonCard firstName = "Julian" lastName = {"Martinez"} age = {38} hairColor = "black" />*/}
    {/*      </div>*/}
    {/*      <div>*/}
    {/*          <PersonCard firstName = "Matthew" lastName = {"Martinez"} age = {20} hairColor = "black" />*/}
    {/*      </div>*/}
    {/*      <div>*/}
    {/*          <PersonCard firstName = "Immanuel" lastName = {"Martinez"} age = {12} hairColor = "autumn red" />*/}
    {/*      </div>*/}
    {/*  </div>*/}
      <LightSwitch />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
