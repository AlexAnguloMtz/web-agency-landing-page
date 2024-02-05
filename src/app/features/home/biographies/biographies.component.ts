import { Component, Input } from '@angular/core';
import { CrewMember } from '../../../types/CrewMember';

@Component({
  selector: 'app-biographies',
  standalone: true,
  imports: [],
  templateUrl: './biographies.component.html',
  styleUrl: './biographies.component.sass',
})
export class BiographiesComponent {
  members: Array<CrewMember> = [
    {
      name: 'Jack Daniels',
      role: { nameLong: '' },
      image: '',
      biography: 'Lorem ipsum',
    },
    {
      name: 'Captain Morgan',
      role: { nameLong: '' },
      image: 'Lorem ipsum',
    },
    {
      name: 'Hammer Austin',
      role: { nameLong: '' },
      image: 'Lorem ipsum',
    },
  ];
}
