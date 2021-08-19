import {Component, Input, SimpleChanges, OnInit, OnChanges} from '@angular/core';

import {from, interval, pipe} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {filter, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-temp-practise-delete',
  templateUrl: './temp-practise-delete.component.html',
  styleUrls: ['./temp-practise-delete.component.css']
})
export class TempPractiseDeleteComponent implements OnInit {

  constructor() {
  }
  title = "Delete component title";
  content = "Content from delete component"

  onFocus() {
    console.log('focussed');
    // this.title = 'test123';
  }


  ngOnInit() {

    const nums = of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      filter((n: number) => n !== 0),
      map(n => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Suscribe to run the combined functions
    // squareOdd.subscribe(x => console.log(x));
  }
}



