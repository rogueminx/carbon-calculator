export class Survey {
  date: string = new Date().toISOString().split("T")[0];
  userId: string;

  animalConsumption: string;
  squareFeet: string;
  peopleInHome: string;
  houseEfficiency: string;
  percentRenewable:string;
  trash:string;
  vehicleMiles:string;
  milesPerGallon:string;
  publicMiles:string;
  hoursFlown:string;

  constructor() {
    console.log(this.getTonnes());
  }

  getTonnes() {
    const baseline = 10;
    let foodModifier = parseInt(this.animalConsumption);

    let squareFeetPerPerson = parseInt(this.squareFeet) / parseInt(this.peopleInHome);

    let housingModifier = (squareFeetPerPerson - 2000)*3/5000 + parseInt(this.houseEfficiency) + parseInt(this.trash);

    let gallonsPerWeek = parseInt(this.vehicleMiles)/parseInt(this.milesPerGallon);

    let transportModifier = (gallonsPerWeek - 4)*.4 + (parseInt(this.publicMiles) - 21)*.01 + (parseInt(this.hoursFlown) - 6)*.1;

    return baseline + foodModifier + housingModifier + transportModifier;
  }
}
