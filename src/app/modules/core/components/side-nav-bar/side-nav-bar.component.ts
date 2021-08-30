import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {
  @Input() toggle;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.toggleMenu();
  }
  toggleMenu(){
   let navigation = document.querySelector('.navigation');
  //  let toggle = navigation.querySelector('.toggle');
   navigation.classList.toggle('active');
  //  toggle.classList.toggle('active');

  }

}
