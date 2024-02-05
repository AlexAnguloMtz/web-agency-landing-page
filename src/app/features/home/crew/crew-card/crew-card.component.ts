import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../../../../types/SocialNetwork';

@Component({
  selector: 'app-crew-card',
  standalone: true,
  imports: [],
  templateUrl: './crew-card.component.html',
  styleUrl: './crew-card.component.sass',
})
export class CrewCardComponent {
  @Input() name: string;
  @Input() image: string;
  @Input() role: string;
  @Input() githubUrl?: string;
  @Input() linkedInUrl?: string;
  @Input() twitterUrl?: string;

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
