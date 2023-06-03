import { Directive, HostListener } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from "firebase/compat/app";
// import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app;

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {
  // constructor(public afAuth: AngularFireAuth) {}

  // @HostListener('click')
  // onclick() {
  //   this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
}