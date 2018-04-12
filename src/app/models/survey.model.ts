export class Survey {
  static currentSurvey: Survey;
  date: string = new Date().toISOString().split("T")[0];
  userId: string;

  animalProductCo2: number = 1.5;
  foodCo2: number = 3.5;

  squareFeet: number = 2000;
  peopleInHome: number = 2;
  housingCo2: number = 3/5;

  energyCo2: number = 3;

  trashCo2: number = 3;

  vehicleMiles: number = 120;
  milesPerGallon: number = 30;
  publicMiles: number = 21;
  hoursFlown: number = 6;
  transportCo2: number = 2.61;

  totalCo2: number = 12.7

  constructor() {}

  calculate() {
    this.foodCo2 = 2 + this.animalProductCo2;

    let squareFeetPerPerson = this.squareFeet / this.peopleInHome;
    this.housingCo2 = squareFeetPerPerson*3/5000;

    let gallonsPerWeek = this.vehicleMiles / this.milesPerGallon;
    this.transportCo2 = gallonsPerWeek*.4 + this.publicMiles*.01 + this.hoursFlown*.1;

    let total = this.foodCo2 + this.housingCo2 + this.energyCo2 + this.trashCo2 + this.transportCo2;
    this.totalCo2 = Math.round(total * 10) / 10;
  }

  keepSurvey() {
    Survey.currentSurvey = this;
    console.log(Survey.currentSurvey);
  }
}
