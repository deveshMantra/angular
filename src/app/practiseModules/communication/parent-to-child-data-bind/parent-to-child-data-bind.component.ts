import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-to-child-data-bind',
  templateUrl: './parent-to-child-data-bind.component.html',
  styleUrls: ['./parent-to-child-data-bind.component.css']
})
export class ParentToChildDataBindComponent implements OnInit {
  values = ['test1', 'test2', 'test3'];

  constructor() {
  }

  ngOnInit() {
    console.log('i have been called', this.values);
  }
}
