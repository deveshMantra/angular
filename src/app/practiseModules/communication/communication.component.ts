import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  values = ['ss', 'sssss'];

  constructor() {
  }

  ngOnInit() {
  }

  onKey(event: any) {
    console.log('i am here', event.target.value);
    this.values.push(event.target.value);
  }

}
