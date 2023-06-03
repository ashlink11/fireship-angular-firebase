import { Directive, HostListener } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from "firebase/compat/app";
// import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app;
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
// import * as firebase from 'firebase/app';
// import { environment } from 'src/environments/environment';
// import firebase from 'firebase/compat';

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

