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
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
  }

  submitSurvey(animalConsumption: string, houseSize: string, peopleInHome: string, houseEfficiency: string, percentRenewable: string, trash: string, vehicleMiles: string, fuelEconomy: string, publicTransportMiles: string, hoursFlown: string) {
    let newSurvey: Survey = new Survey(animalConsumption, houseSize, peopleInHome, houseEfficiency, percentRenewable, trash, vehicleMiles, fuelEconomy, publicTransportMiles, hoursFlown);
    this.surveyService.saveSurvey(newSurvey);
  }
}
