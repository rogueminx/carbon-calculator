import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../models/survey.model';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [SurveyService]
})
export class WelcomeComponent implements OnInit {
  flown: number;
  test:number = 100;
  openSurvey: Survey = new Survey()
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    // this.openSurvey.animalConsumption =
    // this.openSurvey.squareFeet =
    // this.openSurvey.peopleInHome =
    // this.openSurvey.houseEfficiency =
    // this.openSurvey.percentRenewable =
    // this.openSurvey.trash =
    // this.openSurvey.vehicleMiles =
    // this.openSurvey.milesPerGallon =
    // this.openSurvey.publicMiles =
    // this.openSurvey.hoursFlown =
  }
  submitSurvey() {
    // this.surveyService.saveSurvey(this.openSurvey);
    // this.openSurvey = new Survey();
    console.log(this.openSurvey.getTonnes());
  }
}
