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
      name: 'Kim Chan',
      gender: 'male',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Sr Developer',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CEO.jpg',
    },
    {
      name: 'Xavier Zhang',
      gender: 'male',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'AI Science Developer',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
    {
      name: 'Sophia Wang',
      gender: 'female',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Data Science',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
    {
      name: 'Eva Martinez',
      gender: 'female',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Graphic Design',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
    {
      name: 'Stella Nguyen',
      gender: 'female',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Digital Marketing',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
    {
      name: 'Marco Ugarte',
      gender: 'female',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Business Intelligence',
      },
      profilePicture: baseImageUrl + 'placeholder-anime-CFO.png',
    },
  ];
}
