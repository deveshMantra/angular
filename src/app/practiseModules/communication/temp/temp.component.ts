import {AfterViewInit, ViewChild, OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {ChildTempComponent} from './child-temp/child-temp.component';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  @ViewChild(ChildTempComponent, { static: true })
  private timerComponent: ChildTempComponent;

  start() {
    this.timerComponent.start();
  }

  seconds() {
    return 0;
  }

  stop() {
    this.timerComponent.stop();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
