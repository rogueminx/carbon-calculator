import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css'],
  providers: [AuthenticationService]
})
export class AccountStatusComponent implements OnInit {
  public user;
  private isLoggedIn: boolean;

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user=> {
      this.user = user;
      console.log(user)
    })
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
