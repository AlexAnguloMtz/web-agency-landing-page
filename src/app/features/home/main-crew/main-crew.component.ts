import { Component } from '@angular/core';
import { MainCrewCardComponent } from './main-crew-card/main-crew-card.component';

@Component({
  selector: 'app-main-crew',
  standalone: true,
  imports: [MainCrewCardComponent],
  templateUrl: './main-crew.component.html',
  styleUrl: './main-crew.component.sass',
})
export class MainCrewComponent {
  member: string = 'Crew Members';
  members: Array<CrewMember> = [
    {
      name: 'John Smith',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
    {
      name: 'Diana Skies',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
    {
      name: 'Marco Stue',
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: '',
      socialNetworks: [],
    },
  ];
}

type CrewMember = {
  name: string;
  phrase?: string;
  profilePicture: string;
  socialNetworks: SocialNetworks;
};

type SocialNetworks = {};
