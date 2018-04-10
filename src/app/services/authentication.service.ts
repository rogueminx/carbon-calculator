import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  authenticatedUserUID: string;
  user: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth, public database: AngularFireDatabase) {
    this.user = afAuth.authState;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(signedInUser => {
      if(signedInUser) {
        let uid = firebase.auth().currentUser.uid;
        this.authenticatedUserUID = uid;
        this.userExists(uid).subscribe(user => {
          if (!user) {
            const newUser = new User (signedInUser.user.displayName, signedInUser.user.uid, signedInUser.user.email);
            this.pushUserToDatabase(newUser);
          }
        })
      }
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  createUser(email, password, displayName) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(signedInUser => {
        signedInUser.sendEmailVerification();
        signedInUser.updateProfile({displayName:displayName});
        if(signedInUser) {
          let uid = firebase.auth().currentUser.uid;
          this.authenticatedUserUID = uid;
          this.userExists(uid).subscribe(user => {
          if (!user) {
            const newUser = new User (signedInUser.user.displayName, signedInUser.user.uid, signedInUser.user.email);
            this.pushUserToDatabase(newUser);
          }
        })
      }
    });

  }

  pushUserToDatabase(newUser: User): void {
    this.database.list(`users`).push(newUser);
}

  loginWithEmail(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  deleteAccount() {
    firebase.auth().currentUser.delete();
  }

  userExists(uid: string): Observable<boolean> {
    return this.getUserByUID(uid).map(data => !!data[0]);
   }

   getUserByUID(userUID: string): FirebaseListObservable<any[]> {
     return this.database.list(`users`, {query: {orderByChild: 'uid', equalTo: userUID}});
   }
}
