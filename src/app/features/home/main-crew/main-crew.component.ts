import { Component } from '@angular/core';

@Component({
  selector: 'app-main-crew',
  standalone: true,
  imports: [],
  templateUrl: './main-crew.component.html',
  styleUrl: './main-crew.component.sass',
})
export class MainCrewComponent {
  member = 'Crew Members';
}

type CrewMember = {
  name: string;
  phrase?: string;
  profilePicture: string;
  socialNetworks: SocialNetworks;
};

type SocialNetworks = {};
