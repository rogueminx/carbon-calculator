import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  public user;
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user=> {
      this.user = user;
      console.log(user);
    })
  }

  ngDoCheck(){

  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }
}
