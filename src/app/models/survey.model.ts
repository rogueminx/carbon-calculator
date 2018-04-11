// export class Survey {
//   date: string = new Date().toISOString().split("T")[0];
//   userId: string;
//
//   animalConsumption: string = "0";
//   squareFeet: string = "2000";
//   peopleInHome: string = "2";
//   houseEfficiency: string = "0";
//   // percentRenewable:string;
//   trash: string = "0";
//   vehicleMiles: string = "120";
//   milesPerGallon: string = "30";
//   publicMiles: string = "21";
//   hoursFlown: string = "6";
//
//   constructor() {}
//
//   getTonnes() {
//     const baseline = 10;
//
//     let foodModifier = parseInt(this.animalConsumption);
//
//     let squareFeetPerPerson = parseInt(this.squareFeet) / parseInt(this.peopleInHome);
//
//     let housingModifier = (squareFeetPerPerson - 1000)*3/5000 + parseInt(this.houseEfficiency) + parseInt(this.trash);
//
//     let gallonsPerWeek = parseInt(this.vehicleMiles)/parseInt(this.milesPerGallon);
//
//     let transportModifier = (gallonsPerWeek - 4)*.4 + (parseInt(this.publicMiles) - 21)*.01 + (parseInt(this.hoursFlown) - 6)*.1;
//
//     return baseline + foodModifier + housingModifier + transportModifier;
//   }
// }

export class Survey {
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

  totalCo2: number = 12.71

  constructor() {}

  calculate() {
    this.foodCo2 = 2 + this.animalProductCo2;

    let squareFeetPerPerson = this.squareFeet / this.peopleInHome;
    this.housingCo2 = squareFeetPerPerson*3/5000;

    let gallonsPerWeek = this.vehicleMiles / this.milesPerGallon;
    this.transportCo2 = gallonsPerWeek*.4 + this.publicMiles*.01 + this.hoursFlown*.1;

    this.totalCo2 = this.foodCo2 + this.housingCo2 + this.transportCo2;
  }
}
