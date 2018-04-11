import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Survey } from '../models/survey.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() childUserSurveys: Survey[];
  // lineChart
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { backgroundColor: '#D6AF66', borderColor: '#000' }, // food
    { backgroundColor: '#5F464B', borderColor: '#000' },// housing
    { backgroundColor: '#DD8663', borderColor: '#000' },// energy
    { backgroundColor: '#5C6D70', borderColor: '#000' },// trash
    { backgroundColor: '#C4BBAF', borderColor: '#000' },// transport
    { backgroundColor: '#F4D8A4', borderColor: '#000' },// food Path
    { backgroundColor: '#937A7F', borderColor: '#000' },// housing Path
    { backgroundColor: '#F2B096', borderColor: '#000' },// energy Path
    { backgroundColor: '#9EA9AA', borderColor: '#000' },// trash Path
    { backgroundColor: '#F4EDE3', borderColor: '#000' }// transport Path
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.childUserSurveys) {
      let food = this.childUserSurveys.map(survey => survey.foodCo2);
      let housing = this.childUserSurveys.map(survey => survey.housingCo2+survey.foodCo2);
      let energy = this.childUserSurveys.map(survey => survey.energyCo2+survey.housingCo2+survey.foodCo2);
      let trash = this.childUserSurveys.map(survey => survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2);
      let transport = this.childUserSurveys.map(survey => survey.transportCo2+survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2);

      let surveys: number = this.childUserSurveys.length
      console.log("the number of surveys available" + surveys);
      let foodPath = new Array(surveys - 1).fill(null).concat([food[surveys - 1], 1])
      let housingPath = new Array(surveys - 1).fill(null).concat([housing[surveys - 1], 2])
      let energyPath = new Array(surveys - 1).fill(null).concat([energy[surveys - 1], 3])
      let trashPath = new Array(surveys - 1).fill(null).concat([trash[surveys - 1], 4])
      let transportPath = new Array(surveys - 1).fill(null).concat([transport[surveys - 1], 5])

      this.lineChartData = [
        {data: food, label: "Food"},
        {data: housing, label: 'Housing'},
        {data: energy, label: 'Energy'},
        {data: trash, label: 'Trash'},
        {data: transport, label: 'Transport'},
        {data: foodPath, label: 'Food Path'},
        {data: housingPath, label: 'Housing Path'},
        {data: energyPath, label: 'Energy Path'},
        {data: trashPath, label: 'Trash Path'},
        {data: transportPath, label: 'Transport Path'},
        // {data: new Array(this.childUserSurveys.length).fill(null).concat()}
      ];
      this.lineChartLabels.length = 0;
      this.childUserSurveys.forEach(survey => {
        this.lineChartLabels.push(survey.date);
      });
      this.lineChartLabels.push('Goals');
    }

  }

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }
}
