import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-chartjsexample',
  templateUrl: './chartjsexample.component.html',
  styleUrls: ['./chartjsexample.component.css']
})
export class ChartjsexampleComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  /*   canvas: any;
    ctx: any;
    @ViewChild('mychart') mychart:any; */


  /*  ngAfterViewInit() {
     this.canvas = this.mychart.nativeElement;
     this.ctx = this.canvas.getContext('2d');

     new Chart(this.ctx, {
       type: 'line',
       data: {
           datasets: [{
               label: 'Current Vallue',
               data: [0, 20, 40, 50],
               backgroundColor: "rgb(115 185 243 / 65%)",
               borderColor: "#007ee7",
               fill: true,
           },
           {
             label: 'Invested Amount',
             data: [0, 20, 40, 60, 80],
             backgroundColor: "#47a0e8",
             borderColor: "#007ee7",
             fill: true,
         }],
           labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
       },
   });
   } */
  // var ctx = document.getElementById('myChart').getContext('2d');


}
