export class Survey {
  static currentSurvey: Survey;
  date: string = new Date().toISOString().split("T")[0];
  userId: string;

  animalProduct: string = "1.5";
  foodCo2: number;

  squareFeet: string = "2000";
  peopleInHome: string = "2";
  housingCo2: number;

  energy: string = "3";
  energyCo2: number;

  trash: string = "3";
  trashCo2: number;

  vehicleMiles: string = "120";
  milesPerGallon: string = "30";
  publicMiles: string = "21";
  hoursFlown: string = "6";
  transportCo2: number;

  totalCo2: number;

  constructor() {}

  calculate() {
    this.foodCo2 = 2 + parseFloat(this.animalProduct);

    let squareFeetPerPerson = parseFloat(this.squareFeet) / parseFloat(this.peopleInHome);
    this.housingCo2 = squareFeetPerPerson*3/5000;

    this.energyCo2 = parseFloat(this.energy);

    this.trashCo2 = parseFloat(this.trash);

    let gallonsPerWeek = parseFloat(this.vehicleMiles) / parseFloat(this.milesPerGallon);
    this.transportCo2 = gallonsPerWeek*.4 + parseFloat(this.publicMiles)*.01 + parseFloat(this.hoursFlown)*.1;

    let total = this.foodCo2 + this.housingCo2 + this.energyCo2 + this.trashCo2 + this.transportCo2;
    this.totalCo2 = Math.round(total * 10) / 10;
  }

  keepSurvey() {
    Survey.currentSurvey = this;
    console.log(Survey.currentSurvey);
  }
}
