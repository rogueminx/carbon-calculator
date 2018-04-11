import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Survey } from '../models/survey.model';
import { SurveyService } from '../services/survey.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, SurveyService]
})
export class LoginComponent implements OnInit {
  keptSurvey: Survey;
  constructor(public authService: AuthenticationService, public router: Router, public surveyService: SurveyService) { }
  user;

  ngOnInit() {
    this.keptSurvey = Survey.currentSurvey;

  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.authService.user.subscribe(user=> {
      this.user = user;
      if (this.user) {
        if (this.keptSurvey) {
          this.surveyService.saveSurvey(this.keptSurvey, this.user);
          Survey.currentSurvey = null;
        }
        this.router.navigate(['user'])
      }
    })

  }

  loginWithEmail(email, password) {
    this.authService.loginWithEmail(email, password);
    this.authService.user.subscribe(user=> {
      this.user = user;
      if (this.user) {
        if (this.keptSurvey) {
          this.surveyService.saveSurvey(this.keptSurvey, this.user);
          Survey.currentSurvey = null;
        }
        this.router.navigate(['user'])
      }
    })
  }
}
