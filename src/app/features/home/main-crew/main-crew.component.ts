import { Component } from '@angular/core';
import { MainCrewCardComponent } from './main-crew-card/main-crew-card.component';
import { CrewMember } from '../../../types/CrewMember';

const baseImageUrl = '../../../../assets/images/placeholders/';

@Component({
  selector: 'app-main-crew',
  standalone: true,
  imports: [MainCrewCardComponent],
  templateUrl: './main-crew.component.html',
  styleUrl: './main-crew.component.sass',
})
export class MainCrewComponent {
  members: Array<CrewMember> = [
    {
      name: 'Marco Stue',
      gender: 'male',
      githubUrl: 'www.github.com',
      linkedInUrl: 'www.linkedin.com',
      twitterUrl: 'www.twitter.com',
      role: {
        name: 'CTO',
        description: 'Manages all technology related stuff',
      },
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: baseImageUrl + 'placeholder-anime-CTO.jpg',
    },
    {
      name: 'John Smith',
      gender: 'male',
      githubUrl: 'www.github.com',
      linkedInUrl: 'www.linkedin.com',
      twitterUrl: 'www.twitter.com',
      role: {
        name: 'Team Leader',
        description: 'Fundador y Director Ejecutivo de My Company',
      },
      phrase: 'Atrévete a soñar, desafía los límites, crea el futuro',
      profilePicture: baseImageUrl + 'placeholder-anime-CEO.jpg',
    },
    {
      name: 'Diana Skies',
      gender: 'female',
      githubUrl: 'www.github.com',
      linkedInUrl: 'www.linkedin.com',
      twitterUrl: 'www.twitter.com',
      role: {
        name: 'CFO',
        description: 'Manages all money related stuff',
      },
      phrase:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
  ];
}
