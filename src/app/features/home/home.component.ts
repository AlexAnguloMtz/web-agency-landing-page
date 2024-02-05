import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { MainCrewComponent } from './main-crew/main-crew.component';
import { HeroComponent } from './hero/hero.component';
import { CrewComponent } from './crew/crew.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { ContactButtonComponent } from '../../components/contact-button/contact-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    MainCrewComponent,
    CrewComponent,
    AboutUsComponent,
    BiographiesComponent,
    ContactButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
