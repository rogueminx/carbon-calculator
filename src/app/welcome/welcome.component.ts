import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  flown: number;
  constructor() { }

  ngOnInit() {
  }
  calculateClicked(animalConsumption, houseSize, peopleInHome, houseEfficiency, percentRenewable, trash, vehicleMiles, fuelEconomy, publicTransportMiles, hoursFlown) {
    console.log(animalConsumption, houseSize, peopleInHome, houseEfficiency, percentRenewable, trash, vehicleMiles, fuelEconomy, publicTransportMiles, hoursFlown);
  }
}
