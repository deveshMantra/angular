import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public gradientConfig: any;
  public menuClass: boolean;
  public collapseStyle: string;
  public windowWidth: number;
  public sideNavCollapse: boolean = false;
  @Output() onNavCollapse = new EventEmitter();
  @Output() onNavHeaderMobCollapse = new EventEmitter();

  constructor() {
    // this.gradientConfig = GradientConfig.config;
    this.menuClass = false;
    this.collapseStyle = 'none';
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() { }

  toggleMobOption() {
    this.menuClass = !this.menuClass;
    this.collapseStyle = (this.menuClass) ? 'block' : 'none';
  }

  navCollapse() {
    if (this.windowWidth >= 992) {
      this.onNavCollapse.emit();
    } else {
      this.onNavHeaderMobCollapse.emit();
    }
  }





  /*
  * Toggle navigation Sidebar
  */
  toggleSideNavBar(){
    this.sideNavCollapse = !this.sideNavCollapse;
    console.log('Naviagtion flag-', this.sideNavCollapse);

  }

}
