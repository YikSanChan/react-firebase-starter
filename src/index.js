import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const config = {
  apiKey: "AIzaSyDZRBy6tNuz9awZ5Zm2w9Vnv_gHvYQvBwc",
  authDomain: "react-firebase-starter-62f3d.firebaseapp.com",
  databaseURL: "https://react-firebase-starter-62f3d.firebaseio.com",
  projectId: "react-firebase-starter-62f3d",
  storageBucket: "",
  messagingSenderId: "145445338978"
};
firebase.initializeApp(config);
