import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { App } from './scripts/App';
import firebase from "firebase";
import * as serviceWorker from './scripts/serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyDAYZIMYOmFcctfdwz69IxFTTJKW24PC58",
  authDomain: "simple-blog-ef2c7.firebaseapp.com",
  databaseURL: "https://simple-blog-ef2c7.firebaseio.com",
  projectId: "simple-blog-ef2c7",
  storageBucket: "",
  messagingSenderId: "268617064080",
  appId: "1:268617064080:web:5ebc3910e76955ca"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
