import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './crew-card.component.html',
  styleUrl: './crew-card.component.sass',
})
export class CrewCardComponent {
  @Input() name: string;
}
