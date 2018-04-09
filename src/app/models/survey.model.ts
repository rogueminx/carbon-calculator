export class Survey {
  date: string = new Date().toISOString().split("T")[0];
  // public timestamp: number = new Date().now
  userId: string;

  constructor(public animalConsumption: string, public houseSize: string, public peopleInHome: string, public houseEfficiency: string, public percentRenewable:string, public trash:string, public vehicleMiles:string, public fuelEconomy:string, public publicTransportMiles:string, public hoursFlown:string) { }

  // getTonnes() {
  //   const baseline = 10;
  //   let foodModifier = parseInt(this.animalConsumption);
  //
  //   let squareFeetPerPerson = parseInt(this.houseSize) / parseInt(this.peopleInHome);
  //
  //   let housingModifier =
  //
  //   let transportModifier =
  //
  //   return baseline + foodModifier + housingModifier + transportModifier;
  // }
}
