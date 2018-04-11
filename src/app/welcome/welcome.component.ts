import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../models/survey.model';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [SurveyService, AuthenticationService, UserService]
})
export class WelcomeComponent implements OnInit {
  flown: number;
  test:number = 100;
  openSurvey: Survey = new Survey()
  // userId: string;
  user;
  constructor(private surveyService: SurveyService, private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.openSurvey.calculate;
    this.authService.user.subscribe(user => {
      this.user = user;
      // if (user) {
      //     this.userId = user.uid;
      // }
    });

  }
  submitSurvey() {
    this.surveyService.saveSurvey(this.openSurvey, this.user);
    this.openSurvey = new Survey();
  }

  foodChange(animalProductCo2) {
    // console.log("hey");
    // console.log(animalProductCo2);
    this.openSurvey.animalProductCo2 = parseFloat(animalProductCo2);

    this.openSurvey.calculate();
    console.log(this.openSurvey.transportCo2);
  }

  housingChange(squareFeet, peopleInHome, energyCo2, trashCo2) {
    this.openSurvey.squareFeet = parseFloat(squareFeet);
    this.openSurvey.peopleInHome = parseFloat(peopleInHome);
    this.openSurvey.energyCo2 = parseFloat(energyCo2);
    this.openSurvey.trashCo2 = parseFloat(trashCo2);

    this.openSurvey.calculate();
    console.log("updatehousing")
    console.log(this.openSurvey.transportCo2);
  }

  transportationChange(vehicleMiles, milesPerGallon, publicMiles, hoursFlown) {
    this.openSurvey.vehicleMiles = parseFloat(vehicleMiles);
    this.openSurvey.milesPerGallon = parseFloat(milesPerGallon);
    this.openSurvey.publicMiles = parseFloat(publicMiles);
    this.openSurvey.hoursFlown = parseFloat(hoursFlown);

    this.openSurvey.calculate();
    console.log("updatetransport")
    console.log(this.openSurvey.transportCo2);

  }
}
