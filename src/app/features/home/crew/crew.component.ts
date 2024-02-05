import { Component } from '@angular/core';
import { CrewMember } from '../../../types/CrewMember';
import { CrewCardComponent } from './crew-card/crew-card.component';

const baseImageUrl = '../../../../assets/images/placeholders/';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewCardComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.sass',
})
export class CrewComponent {
  members: Array<CrewMember> = [
    {
      name: 'Daniel Jenkins',
      gender: 'male',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'Sr Developer',
      },
      image: baseImageUrl + 'placeholder-crew.jpg',
    },
    {
      name: 'Gabriel Sabbadin',
      gender: 'male',
      githubUrl: 'http://www.github.com',
      linkedInUrl: 'http://www.linkedin.com',
      twitterUrl: 'http://www.twitter.com',
      role: {
        name: 'AI Science Developer',
      },
      image: baseImageUrl + 'placeholder-crew.jpg',
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
      image: baseImageUrl + 'placeholder-crew.jpg',
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
      image: baseImageUrl + 'placeholder-crew.jpg',
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
      image: baseImageUrl + 'placeholder-crew.jpg',
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
      image: baseImageUrl + 'placeholder-crew.jpg',
    },
  ];
}
