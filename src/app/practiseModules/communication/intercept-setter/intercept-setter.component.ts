import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-intercept-setter',
  templateUrl: './intercept-setter.component.html',
  styleUrls: ['./intercept-setter.component.css']
})
export class InterceptSetterComponent implements OnInit {
  names = ['Mr. IQ', '   ', '  Bombasto  '];

  constructor() {
  }

  ngOnInit() {
  }

}
