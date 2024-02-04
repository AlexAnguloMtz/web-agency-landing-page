import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { MainCrewComponent } from './main-crew/main-crew.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, HeroComponent, MainCrewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
