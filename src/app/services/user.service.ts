import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUserUID: string;
  constructor(public database: AngularFireDatabase) { }


  createNewUser(newUser: User): void {
   this.database.list(`users`).push(newUser);
  }

  userExists(uid: string): Observable<boolean> {
    return this.getUserByUID(uid).map(data => !!data[0]);
   }

  getUserByUID(userUID: string): FirebaseListObservable<any[]> {
    return this.database.list(`users`, {query: {orderByChild: 'uid', equalTo: userUID}});
  }

}
