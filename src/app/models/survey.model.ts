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

  animalProductCo2: number;
  foodCo2: number;

  squareFeet: number;
  peopleInHome: number;
  housingCo2: number;

  energyCo2: number;

  trashCo2: number;

  vehicleMiles: number;
  milesPerGallon: number;
  publicMiles: number;
  hoursFlown: number;
  transportCo2: number;

  totalCo2: number;

  constructor() {}

  calculate() {
    this.foodCo2 = 2 + this.animalProductCo2;

    let squareFeetPerPerson = this.squareFeet / this.peopleInHome;
    this.housingCo2 = squareFeetPerPerson*3/5000;

    let gallonsPerWeek = this.vehicleMiles / this.milesPerGallon;
    this.transportCo2 = gallonsPerWeek*.4 + this.publicMiles*.01 + this.hoursFlown*.1;

    this.totalCo2 = foodCo2 + housingCo2 + transportCo2;
  }


}
