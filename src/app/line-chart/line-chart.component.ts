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
  public lineChartLabels:Array<any>;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.childUserSurveys) {
      this.lineChartData = [
        {data: this.childUserSurveys.map(survey => survey.foodCo2), label: 'Food'},
        {data: this.childUserSurveys.map(survey => survey.housingCo2+survey.foodCo2), label: 'Housing'},
        {data: this.childUserSurveys.map(survey => survey.energyCo2+survey.housingCo2+survey.foodCo2), label: 'Energy'},
        {data: this.childUserSurveys.map(survey => survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2), label: 'Trash'},
        {data: this.childUserSurveys.map(survey => survey.transportCo2+survey.trashCo2+survey.energyCo2+survey.housingCo2+survey.foodCo2), label: 'Transport'}
      ];
      this.lineChartLabels = this.childUserSurveys.map(survey => survey.date);
    }
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
