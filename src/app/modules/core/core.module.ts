import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideNavBarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
