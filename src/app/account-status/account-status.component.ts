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
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.user = user
      }
    });
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
