import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  // user;
  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
    // this.authService.user.subscribe(user=> {
    //   this.user = user;
    //   console.log(user);
    // })
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithEmail(email, password) {
    this.authService.loginWithEmail(email, password);
    this.router.navigate([''])
  }
}
