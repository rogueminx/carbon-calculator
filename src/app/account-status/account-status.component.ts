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
<<<<<<< HEAD
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.user = user
      }
    });
=======
    this.authService.user.subscribe(user=> {
      this.user = user;
      console.log(user)
    })
>>>>>>> 6b52fd719e5706b66e0f2b1849452132690bc1e0
  }

  logout() {
    this.authService.logout();
    this.user = null;
  }
}
