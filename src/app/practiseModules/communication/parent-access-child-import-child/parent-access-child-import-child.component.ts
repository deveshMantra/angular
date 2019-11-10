import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildComponent} from './view-child/view-child.component';

@Component({
  selector: 'app-parent-access-child-import-child',
  templateUrl: './parent-access-child-import-child.component.html',
  styleUrls: ['./parent-access-child-import-child.component.css']
})
export class ParentAccessChildImportChildComponent implements OnInit {
  @ViewChild(ViewChildComponent)
  private timerComponent: ViewChildComponent;

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
