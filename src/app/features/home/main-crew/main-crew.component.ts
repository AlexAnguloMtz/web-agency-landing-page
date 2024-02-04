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
      name: 'John Smith',
      role: 'Team Leader',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
    {
      name: 'Diana Skies',
      role: 'CTO',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
    {
      name: 'Marco Stue',
      role: 'CTO',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
  ];
}
