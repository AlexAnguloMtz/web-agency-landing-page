import { Component, Input } from '@angular/core';
import { CrewMember } from '../CrewMember';

@Component({
  selector: 'app-main-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './main-crew-card.component.html',
  styleUrl: './main-crew-card.component.sass',
})
export class MainCrewCardComponent {
  @Input() member: CrewMember;
}
