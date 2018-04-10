import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() transport:number = 0;
  @Input() food:number = 0;
  @Input() housing:number = 0;

    public pieChartType:string = 'doughnut';

    // Pie
    public pieChartLabels:string[] = ['Transport', 'Food', 'Housing'];
    public pieChartData:number[] = [0,0,0];

    ngOnChanges() {
      this.pieChartData = [this.transport, this.food, this.housing];
    } 

    ngOnInit() {
      this.ngOnChanges();
    }

}
