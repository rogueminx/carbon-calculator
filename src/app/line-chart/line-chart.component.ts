import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Survey } from '../models/survey.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() childUserSurveys: Survey[];
  @Input() childGoalSurvey: Survey;

  // lineChart
  public lineChartData:Array<any> = [];
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
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    let chartData:Array<any> = [];
    if (this.childUserSurveys && this.childGoalSurvey) {
      let food = this.childUserSurveys.map(survey => survey.foodCo2);
      let housing = this.childUserSurveys.map(survey => survey.housingCo2+survey.foodCo2);
      let energy = this.childUserSurveys.map(survey => survey.energyCo2+survey.housingCo2+survey.foodCo2);
      let trash = this.childUserSurveys.map(survey => survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2);
      let transport = this.childUserSurveys.map(survey => survey.transportCo2+survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2);

      chartData = [
        {data: food, label: "Food"},
        {data: housing, label: 'Housing'},
        {data: energy, label: 'Energy'},
        {data: trash, label: 'Trash'},
        {data: transport, label: 'Transport'}
      ];
      this.lineChartLabels.length = 0;
      this.childUserSurveys.forEach(survey => {
        this.lineChartLabels.push(survey.date);
      });

      if (this.childGoalSurvey.date) {
        this.lineChartLabels.push('Goals');
        let level:number = 0;

        let surveys: number = this.childUserSurveys.length;

        level += this.childGoalSurvey.foodCo2;
        chartData.push({data: new Array(surveys - 1).fill(null).concat([food[surveys - 1], level]), label: "Food Path"});

        level += this.childGoalSurvey.housingCo2;
        chartData.push({data: new Array(surveys - 1).fill(null).concat([housing[surveys - 1], level]), label: "Housing Path"});

        level += this.childGoalSurvey.energyCo2;
        chartData.push({data: new Array(surveys - 1).fill(null).concat([energy[surveys - 1], level]), label: "Energy Path"});

        level += this.childGoalSurvey.trashCo2;
        chartData.push({data: new Array(surveys - 1).fill(null).concat([trash[surveys - 1], level]), label: "Trash Path"});

        level += this.childGoalSurvey.transportCo2;
        chartData.push({data: new Array(surveys - 1).fill(null).concat([transport[surveys - 1], level]), label: "Transport Path"});
      }
    }

    this.lineChartData = [];
    chartData.forEach(item => this.lineChartData.push(item));
  }

  // events
  public chartClicked(e:any):void {
    // console.log(e);
    this.ngOnChanges();
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }
}
