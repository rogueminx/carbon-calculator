import { Injectable } from '@angular/core';
import { Survey } from '../models/survey.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class SurveyService {
  surveys: FirebaseListObservable<any[]>
  userSurveys: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    //this will need to be changed to be per user
  this.surveys = database.list('surveys');

 }

  saveSurvey(newSurvey: Survey, user: firebase.User){
    this.database.list(`surveys/${user.uid}`).push(newSurvey);
  }

  getSurveysByUID(user: firebase.User) {
    return this.database.list(`surveys/${user.uid}`);
  }

  saveGoal(newSurvey: Survey, user: firebase.User) {
    this.database.object(`goals/${user.uid}`).update(newSurvey)
    console.log('its a goal!')
  }

}
