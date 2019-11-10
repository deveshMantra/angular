import {Component, Input, SimpleChanges, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-chiltemppractise-delete',
  templateUrl: './chiltemppractise-delete.component.html',
  styleUrls: ['./chiltemppractise-delete.component.css']
})
export class ChiltemppractiseDeleteComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() content: string;


  ngOnChanges(changes: SimpleChanges) {
    console.log('here');
    for (const property in changes) {
      if (property === 'title') {
        console.log('Previous:', changes[property].previousValue);
        console.log('Current:', changes[property].currentValue);
      }
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

}
