import { Component } from '@angular/core';
import { MainCrewCardComponent } from './main-crew-card/main-crew-card.component';
import { CrewMember } from '../../../types/CrewMember';

@Component({
  selector: 'app-main-crew',
  standalone: true,
  imports: [MainCrewCardComponent],
  templateUrl: './main-crew.component.html',
  styleUrl: './main-crew.component.sass',
})
export class MainCrewComponent {
  selectedRole: string = 'CREW MEMBERS';
  members: Array<CrewMember> = [
    {
      name: 'Marco Stue',
      gender: 'male',
      role: {
        name: 'CTO',
        description: 'Manages all technology related stuff',
      },
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '../../../../assets/images/placeholder-anime-CTO.jpg',
      socialNetworks: [],
    },
    {
      name: 'John Smith',
      gender: 'male',
      role: {
        name: 'Team Leader',
        description: 'Fundador y Director Ejecutivo de My Company',
      },
      phrase: 'Atrévete a soñar, desafía los límites, crea el futuro',
      profilePicture: '../../../../assets/images/placeholder-anime-CEO.jpg',
      socialNetworks: [],
    },
    {
      name: 'Diana Skies',
      gender: 'female',
      role: {
        name: 'CFO',
        description: 'Manages all money related stuff',
      },
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '../../../../assets/images/placeholder-anime-CFO.png',
      socialNetworks: [],
    },
  ];
}
