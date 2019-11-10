import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-to-parent-event-listener',
  templateUrl: './child-to-parent-event-listener.component.html',
  styleUrls: ['./child-to-parent-event-listener.component.css']
})
export class ChildToParentEventListenerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() {
  }

  ngOnInit() {
  }


}
