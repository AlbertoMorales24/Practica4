import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    this.firebaseConnection();
  }

  firebaseConnection() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, 'ralejandrobm@gmail.com', 'alex00')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user == null) {
          console.log('no autenticado');
        } else {
          console.log('usuario autenticado', user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}
