import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUserUID: string;
  constructor(public database: AngularFireDatabase) { }


  createNewUser(newUser: User): void {
   this.database.list(`users`).push(newUser);
 }

}
