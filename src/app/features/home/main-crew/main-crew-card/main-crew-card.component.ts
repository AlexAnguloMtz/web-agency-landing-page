import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './main-crew-card.component.html',
  styleUrl: './main-crew-card.component.sass',
})
export class MainCrewCardComponent {
  @Input() text: string;
  @Input() phrase: string;
  @Input() profilePicture: string;
  @Input() roleDescription: string;
  @Input() gender: string;

  getOverlayImage(): string {
    if (this.gender === 'male') {
      return 'url(assets/images/member-secret-male.png)';
    } else {
      return 'url(assets/images/member-secret-female.png)';
    }
  }
}
