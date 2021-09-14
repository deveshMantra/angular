import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.css']
})
export class ApexChartComponent implements OnInit {

  title = {
    text: 'Basic chart'
  };
  series = [{
    name: 'Java',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
  }];

  constructor() {

  }

  ngOnInit(): void {
    var options = {
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
    this.initializeAnotherChart();
  }
  initializeAnotherChart() {

  }

}
