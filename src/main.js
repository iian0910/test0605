import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw32BeMealOj5CAFp_J7hOpQkfYU41qxU",
  authDomain: "test0605-cb472.firebaseapp.com",
  projectId: "test0605-cb472",
  storageBucket: "test0605-cb472.appspot.com",
  messagingSenderId: "822187736069",
  appId: "1:822187736069:web:829a4bbc3fcd250c33f06c",
  measurementId: "G-89NC3C9WMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

new Vue({
  render: h => h(App),
}).$mount('#app')
