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
  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.user.subscribe(user=> {
      this.user = user;
    })
  }

  logout() {
    // alert(this.user.uid);
    this.authService.logout();
    this.user = null;

  }
}
