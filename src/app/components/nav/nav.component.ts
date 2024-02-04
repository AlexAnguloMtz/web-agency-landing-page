import { Component } from '@angular/core';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLinkComponent, HamburguerButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
  visibleLinks = false;

  setLinksVisible(visible: boolean) {
    this.visibleLinks = visible;
  }
}
