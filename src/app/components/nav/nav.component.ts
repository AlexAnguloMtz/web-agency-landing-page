import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HamburguerButtonComponent } from './hamburguer-button/hamburguer-button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLinkComponent, HamburguerButtonComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {}
