import { Directive, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
// import * as firebase from 'firebase/app';
// import { environment } from 'src/environments/environment';
// import firebase from 'firebase/compat';


@Directive({
  selector: '[appGoogleSignin]'
})
@Injectable({
  providedIn: 'root',
})
export class GoogleSigninDirective {

  constructor(public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: GoogleAuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
