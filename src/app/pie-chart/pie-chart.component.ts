import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() transport:number;
  @Input() food:number;
  @Input() housing:number;

    public pieChartType:string = 'doughnut';

    // Pie
    public pieChartLabels:string[] = ['Transport', 'Food', 'Housing'];
    public pieChartData:number[] = [];

    public chartClicked(e:any):void {
      console.log(e);
      this.food = 200;
      this.setData();
    }

    setData() {
      this.pieChartData = [this.transport, this.food, this.housing];
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    ngOnInit() {
      this.setData();
    }

}
