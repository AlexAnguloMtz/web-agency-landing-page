import { Component } from '@angular/core';
import { NavLinkComponent } from './nav-link/nav-link.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {}
