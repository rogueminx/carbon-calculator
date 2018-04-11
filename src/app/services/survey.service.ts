import { Injectable } from '@angular/core';
import { Survey } from '../models/survey.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SurveyService {
  surveys: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    //this will need to be changed to be per user
  this.surveys = database.list('surveys');
 }

  saveSurvey(newSurvey: Survey){
    //this will need to be saved to be per user
    this.surveys.push(newSurvey);
  }

}
