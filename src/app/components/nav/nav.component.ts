import { Component } from '@angular/core';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavLogoComponent } from './nav-logo/nav-logo.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLogoComponent, NavLinkComponent, HamburguerButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
  visibleLinks = false;
  routes = [
    {
      href: '/about-us',
      name: 'ABOUT US',
    },
    {
      href: '/services',
      name: 'SERVICES',
    },
    {
      href: '/company',
      name: 'COMPANY-NAME',
    },
    {
      href: '/clients',
      name: 'CLIENTS',
    },
    {
      href: '/careers',
      name: 'CAREERS',
    },
    {
      href: '/contact',
      name: 'CONTACT',
    },
  ];

  setLinksVisible(visible: boolean) {
    this.visibleLinks = visible;
  }
}
