import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChartComponent } from './components/charts/apex-chart/apex-chart.component';
import { ChartjsChartComponent } from './components/charts/chartjs-chart/chartjs-chart.component';



@NgModule({
  declarations: [ApexChartComponent, ChartjsChartComponent],
  imports: [
    CommonModule
  ],
  exports: [ApexChartComponent, ChartjsChartComponent]
})
export class SharedModule { }
