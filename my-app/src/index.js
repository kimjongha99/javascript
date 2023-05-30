import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Library from './Library';
// import Clock  from './Clock';
// import Comment from './Comment';
// import CommentList  from './CommentList';
// import NotificationList from './NotificationList';
// import Notification from './Notification';
//import Accommodate from './Accommodate';
import ConfirmButton from './ConfirmButton'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ConfirmButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();