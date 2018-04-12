import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Survey } from '../models/survey.model';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [SurveyService, AuthenticationService, UserService]
})
export class SurveyComponent implements OnInit {
  flown: number;
  test:number = 100;
  openSurvey: Survey = new Survey()
  // userId: string;
  user;
  constructor(private surveyService: SurveyService, private authService: AuthenticationService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.openSurvey.calculate;
    this.authService.user.subscribe(user => {
      this.user = user;
    });

  }
  submitSurvey() {
    if (this.router.url == "/survey/goal") {
      this.surveyService.saveGoal(this.openSurvey, this.user);
      this.openSurvey = new Survey();
      this.router.navigate(['user']);
    }else {
      if (this.user) {
        this.surveyService.saveSurvey(this.openSurvey, this.user);
        this.openSurvey = new Survey();
        this.router.navigate(['user']);
      } else {
        this.openSurvey.keepSurvey();
        this.router.navigate(['login']);
      }
    }
  }



  foodChange(animalProductCo2) {
    // console.log("hey");
    // console.log(animalProductCo2);
    this.openSurvey.animalProductCo2 = parseFloat(animalProductCo2);

    this.openSurvey.calculate();
  }

  housingChange(squareFeet, peopleInHome, energyCo2, trashCo2) {
    this.openSurvey.squareFeet = parseFloat(squareFeet);
    this.openSurvey.peopleInHome = parseFloat(peopleInHome);
    this.openSurvey.energyCo2 = parseFloat(energyCo2);
    this.openSurvey.trashCo2 = parseFloat(trashCo2);

    this.openSurvey.calculate();
  }

  transportationChange(vehicleMiles, milesPerGallon, publicMiles, hoursFlown) {
    this.openSurvey.vehicleMiles = parseFloat(vehicleMiles);
    this.openSurvey.milesPerGallon = parseFloat(milesPerGallon);
    this.openSurvey.publicMiles = parseFloat(publicMiles);
    this.openSurvey.hoursFlown = parseFloat(hoursFlown);

    this.openSurvey.calculate();

  }
}
