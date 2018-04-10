import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthenticationService, UserService]
})
export class RegistrationComponent implements OnInit {
  currentUserUID: string;
  constructor(public authService: AuthenticationService, public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  registerUser(email: string, password: string, displayName:string) {
    this.authService.createUser(email, password, displayName).then(_ => {
      this.router.navigate([''])
    }).catch(error => {
      console.log(error.message);
    });

  }

}
