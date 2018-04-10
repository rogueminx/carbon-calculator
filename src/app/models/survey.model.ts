export class Survey {
  date: string = new Date().toISOString().split("T")[0];
  // public timestamp: number = new Date().now
  userId: string;

  constructor(public animalConsumption: string, public houseSize: string, public peopleInHome: string, public houseEfficiency: string, public percentRenewable:string, public trash:string, public vehicleMiles:string, public fuelEconomy:string, public publicTransportMiles:string, public hoursFlown:string) {
    console.log(this.getTonnes());
  }

  getTonnes() {
    const baseline = 10;
    let foodModifier = parseInt(this.animalConsumption);

    let squareFeetPerPerson = parseInt(this.houseSize) / parseInt(this.peopleInHome);

    let housingModifier = (squareFeetPerPerson - 2000)*3/5000 + parseInt(this.houseEfficiency) + parseInt(this.trash);

    let gallonsPerWeek = parseInt(this.vehicleMiles)/parseInt(this.fuelEconomy);

    let transportModifier = (gallonsPerWeek - 4)*.4 + (parseInt(this.publicTransportMiles) - 21)*.01 + (parseInt(this.hoursFlown) - 6)*.1;

    return baseline + foodModifier + housingModifier + transportModifier;
  }
}
