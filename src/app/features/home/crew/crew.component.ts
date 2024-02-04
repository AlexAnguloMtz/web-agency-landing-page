import { Component } from '@angular/core';
import { CrewMember } from '../../../types/CrewMember';

const baseImageUrl = '../../../../assets/images/placeholders/';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.sass',
})
export class CrewComponent {
  members: Array<CrewMember> = [
    {
      name: 'Marco Forest',
      gender: 'male',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
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
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'CEO',
        description: 'Fundador y Director Ejecutivo de My Company',
      },
      phrase: 'Atrévete a soñar, desafía los límites, crea el futuro',
      profilePicture: baseImageUrl + 'placeholder-anime-CEO.jpg',
    },
    {
      name: 'Diana Skies',
      gender: 'female',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
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
