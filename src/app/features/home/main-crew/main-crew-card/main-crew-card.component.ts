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
  @Input() twitterHref?: string;
  @Input() githubHref?: string;
  @Input() linkedInHref?: string;

  getOverlayImage(): string {
    return `url(assets/images/placeholders/member-secret-${this.gender}.png`;
  }

  getSocialNetworks(): Array<SocialNetwork> {
    const logoBaseUrl: string = 'assets/images/logos';
    const socialNetworks: Array<SocialNetwork> = [];
    if (this.twitterHref) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/`,
        imageAlt: `${this.name} twitter account`,
        href: this.twitterHref,
      });
    }
    if (this.githubHref) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/github-logo.png`,
        imageAlt: `${this.name} github account`,
        href: this.githubHref,
      });
    }
    if (this.linkedInHref) {
      socialNetworks.push({
        imageSrc: `${logoBaseUrl}/`,
        imageAlt: `${this.name} linkedin account`,
        href: this.linkedInHref,
      });
    }
    return socialNetworks;
  }
}

type SocialNetwork = {
  imageSrc: string;
  imageAlt: string;
  href: string;
};
