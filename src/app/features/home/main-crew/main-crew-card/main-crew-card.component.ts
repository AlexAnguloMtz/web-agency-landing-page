import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './main-crew-card.component.html',
  styleUrl: './main-crew-card.component.sass',
})
export class MainCrewCardComponent {
  @Input() text: string;
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
    const twitterImage = '';
    const githubImage = '';
    const linkedInImage = '';
    const socialNetworks: Array<SocialNetwork> = [];
    if (this.twitterHref) {
      socialNetworks.push({ image: twitterImage, href: this.twitterHref });
    }
    if (this.githubHref) {
      socialNetworks.push({ image: githubImage, href: this.githubHref });
    }
    if (this.linkedInHref) {
      socialNetworks.push({ image: linkedInImage, href: this.linkedInHref });
    }
    return socialNetworks;
  }
}

type SocialNetwork = {
  image: string;
  href: string;
};
