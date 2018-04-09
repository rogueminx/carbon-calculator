import { Injectable } from '@angular/core';
import { Survey } from '../models/survey.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SurveyService {
  surveys: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
  this.surveys = database.list('surveys');
 }

  saveSurvey(newSurvey: Survey){
    this.surveys.push(newSurvey);
  }

}
