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
  currentQuestion: string = null;
  user;
  constructor(private surveyService: SurveyService, private authService: AuthenticationService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.openSurvey.calculate;
    this.authService.user.subscribe(user => {
      this.user = user;
    });
    console.log(this.router.url);

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

  foodChange() {
    console.log("foodchange")
    // this.openSurvey.animalProductCo2 = parseFloat(animalProductCo2);

    this.openSurvey.calculate();
    console.log(this.openSurvey.transportCo2);
  }

  calculate() {
    this.openSurvey.calculate();
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

  mouseEnter(question: string) {
    this.currentQuestion = question;
    console.log("enter")
  }

  mouseLeave(question: string) {
    this.currentQuestion = null;
  }

  animalProductCo2Subtext() {
    let number = this.openSurvey.animalProductCo2;
    if (number == 0) return "Never (vegan)";
    if (number < .75) return "Infrequently (vegetarian)";
    if (number < 1.5) return "Occasionally (really like veggies)";
    if (number < 2.25) return "Often (balanced meat/veggies)";
    return "Very Often (meat daily)";
  }
}
