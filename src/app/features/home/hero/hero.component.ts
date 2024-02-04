import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass',
})
export class HeroComponent {
  // TODO set this to false
  heroHidden = true;

  hideHero() {
    this.heroHidden = true;
  }
}
