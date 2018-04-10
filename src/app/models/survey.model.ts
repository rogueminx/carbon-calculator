export class Survey {
  date: string = new Date().toISOString().split("T")[0];
  userId: string;

  animalConsumption: string = "0";
  squareFeet: string = "2000";
  peopleInHome: string = "2";
  houseEfficiency: string = "0";
  // percentRenewable:string;
  trash: string = "0";
  vehicleMiles: string = "120";
  milesPerGallon: string = "30";
  publicMiles: string = "21";
  hoursFlown: string = "6";

  constructor() {}

  getTonnes() {
    const baseline = 10;

    let foodModifier = parseInt(this.animalConsumption);

    let squareFeetPerPerson = parseInt(this.squareFeet) / parseInt(this.peopleInHome);

    let housingModifier = (squareFeetPerPerson - 1000)*3/5000 + parseInt(this.houseEfficiency) + parseInt(this.trash);

    let gallonsPerWeek = parseInt(this.vehicleMiles)/parseInt(this.milesPerGallon);

    let transportModifier = (gallonsPerWeek - 4)*.4 + (parseInt(this.publicMiles) - 21)*.01 + (parseInt(this.hoursFlown) - 6)*.1;

    return baseline + foodModifier + housingModifier + transportModifier;
  }
}
