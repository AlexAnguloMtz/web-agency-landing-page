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
      role: { nameLong: 'Fundador, Director y presidente general' },
      image: '',
      biography: 'Lorem ipsum',
    },
    {
      name: 'Captain Morgan',
      role: { nameLong: 'Jefe de Finanzas, Gestor de Inversiones' },
      image: 'Lorem ipsum',
    },
    {
      name: 'Hammer Austin',
      role: { nameLong: 'Jefe de Tecnología, Gestor de Personal Técnico' },
      image: 'Lorem ipsum',
    },
  ];
}
