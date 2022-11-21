import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMXwaOTh-w4UABP_9ZRIbNnu9jIO0Lurw",
  authDomain: "practica4-ionic.firebaseapp.com",
  projectId: "practica4-ionic",
  storageBucket: "practica4-ionic.appspot.com",
  messagingSenderId: "509497656117",
  appId: "1:509497656117:web:5d96014ec608e7d60d027c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
