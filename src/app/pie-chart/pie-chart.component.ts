import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() food: number = 0;
  @Input() housing: number = 0;
  @Input() energy: number = 0;
  @Input() trash: number = 0;
  @Input() transport: number = 0;

    public pieChartType:string = 'doughnut';

    // Pie
    public pieChartLabels:string[] = ['Food', 'Housing', 'Energy', 'Trash', 'Transport'];
    public pieChartData:number[] = [0,0,0,0,0];

    public chartClicked(e:any):void {
      console.log(e);
      this.ngOnChanges();
    }

    ngOnChanges() {
      this.pieChartData = [this.food, this.housing, this.energy, this.trash, this.transport];
      console.log('update');
    }

    public chartHovered(e:any):void {
      console.log(e);
    }

    ngOnInit() {
      this.ngOnChanges();
      // this.pieChartData = [this.food, this.housing, this.energy, this.trash, this.transport];

    }

}
