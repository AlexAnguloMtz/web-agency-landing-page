import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './main-crew-card.component.html',
  styleUrl: './main-crew-card.component.sass',
})
export class MainCrewCardComponent {
  @Input() name: string;
  @Input() phrase: string;
  @Input() profilePicture: string;
  @Input() roleDescription: string;
  @Input() gender: string;
  @Input() twitterUrl?: string;
  @Input() githubUrl?: string;
  @Input() linkedInUrl?: string;

  getOverlayImage(): string {
    return `url(assets/images/placeholders/member-secret-${this.gender}.png`;
  }

  getSocialNetworks(): Array<SocialNetwork> {
    const logoBaseUrl: string = 'assets/images/logos';
    const socialNetworks: Array<SocialNetwork> = [];
    if (this.githubUrl) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/github-logo.png`,
        imageAlt: `${this.name} github account`,
        url: this.githubUrl,
      });
    }
    if (this.linkedInUrl) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/linkedin-logo.png`,
        imageAlt: `${this.name} linkedin account`,
        url: this.linkedInUrl,
      });
    }
    if (this.twitterUrl) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/x-logo.png`,
        imageAlt: `${this.name} twitter account`,
        url: this.twitterUrl,
      });
    }
    return socialNetworks;
  }
}

type SocialNetwork = {
  imageSrc: string;
  imageAlt: string;
  url: string;
};
