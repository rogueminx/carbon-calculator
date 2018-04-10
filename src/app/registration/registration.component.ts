import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthenticationService]
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  registerUser(email: string, password: string, displayName:string) {
    this.authService.createUser(email, password, displayName).then(user => {
      if(user) {
        console.log(user.uid);
      }
      this.router.navigate([''])
    }).catch(error => {
      console.log(error.message);
    });

  }

}
