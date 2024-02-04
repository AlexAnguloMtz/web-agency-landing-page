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
    return `url(assets/images/placeholders/member-secret-${this.gender}.png`;
  }
}
