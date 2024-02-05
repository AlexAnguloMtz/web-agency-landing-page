import { Component, Input } from '@angular/core';
import { CrewMember } from '../../../types/CrewMember';

const imageBaseUrl: string = 'assets/images/placeholders';

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
      image: imageBaseUrl + '/',
      biography: 'Lorem ipsum',
    },
    {
      name: 'Captain Morgan',
      role: { nameLong: 'Jefe de Finanzas, Gestor de Inversiones' },
      image: imageBaseUrl + '/',
      biography: 'Lorem ipsum',
    },
    {
      name: 'Hammer Austin',
      role: { nameLong: 'Jefe de Tecnología, Gestor de Personal Técnico' },
      image: imageBaseUrl + '/',
      biography: 'Lorem ipsum',
    },
  ];
}
