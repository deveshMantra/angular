import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child-intercept',
  templateUrl: './child-intercept.component.html',
  styleUrls: ['./child-intercept.component.css']
})
export class ChildInterceptComponent implements OnInit {
  private _name = '';

  @Input()
  set name(name: string) {
    console.log('setter called with ', name);
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string {
    console.log('getter called');
    return this._name;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log(changes);
  }

}
