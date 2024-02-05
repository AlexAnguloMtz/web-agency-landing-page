import { Component, Input } from '@angular/core';
import { CrewMember } from '../../../types/CrewMember';

const imageBaseUrl: string = 'assets/images/placeholders';

@Component({
  selector: 'app-biographies',
  standalone: true,
  imports: [],
  templateUrl: './biographies.component.html',
  styleUrl: './biographies.component.sass',
})
export class BiographiesComponent {
  members: Array<CrewMember> = [
    {
      name: 'Jack Daniels',
      role: { nameLong: 'Fundador, Director y presidente general' },
      image: imageBaseUrl + '/placeholder-crew.jpg',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante eget justo condimentum dapibus. Nullam sit amet ultricies sem. Fusce nec urna euismod, posuere metus a, vestibulum libero. Nullam consectetur, augue a volutpat tincidunt, neque justo cursus libero, in luctus ligula sem vel justo. Integer a elit vitae justo venenatis mattis. Vivamus auctor bibendum ante, eget vulputate turpis suscipit eget. Etiam non justo a purus condimentum volutpat nec vitae justo.

      Pellentesque euismod, eros eget tincidunt rhoncus, mauris lacus elementum tellus, id eleifend metus libero vel tortor. Aliquam erat volutpat. Integer eu semper sem. Suspendisse potenti. Nunc sed lorem quis nulla semper sagittis. Nulla facilisi. Ut rhoncus accumsan massa, eu convallis justo vulputate in. Vivamus congue lectus in justo laoreet, vel dictum ex efficitur.
      
      Quisque nec pharetra quam. Sed ac velit euismod, ullamcorper ex a, dignissim sem. Etiam ut massa eget risus auctor dictum. Integer ultricies ipsum et feugiat laoreet. Fusce elementum feugiat cursus. Nullam vel fermentum elit, eu tempus quam. Ut tincidunt vulputate dui, a fringilla tortor hendrerit eu. In ac imperdiet nunc. Integer efficitur nulla a justo luctus feugiat. Phasellus auctor, justo eu facilisis cursus, nisi odio fermentum tellus, eget consequat lectus erat vel lectus. Suspendisse ullamcorper nulla in est blandit, vel dictum odio pulvinar.
      
      Praesent in tortor vel mauris imperdiet tincidunt. Vestibulum in fermentum turpis. Integer nec quam elit. Suspendisse potenti. Duis commodo facilisis laoreet. Sed at est vel justo dapibus dapibus vel a ligula. Duis a orci quis nisl fermentum cursus. Fusce lacinia augue a suscipit vestibulum.
      `,
    },
    {
      name: 'Captain Morgan',
      role: { nameLong: 'Jefe de Finanzas, Gestor de Inversiones' },
      image: imageBaseUrl + '/placeholder-crew.jpg',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante eget justo condimentum dapibus. Nullam sit amet ultricies sem. Fusce nec urna euismod, posuere metus a, vestibulum libero. Nullam consectetur, augue a volutpat tincidunt, neque justo cursus libero, in luctus ligula sem vel justo. Integer a elit vitae justo venenatis mattis. Vivamus auctor bibendum ante, eget vulputate turpis suscipit eget. Etiam non justo a purus condimentum volutpat nec vitae justo.

      Pellentesque euismod, eros eget tincidunt rhoncus, mauris lacus elementum tellus, id eleifend metus libero vel tortor. Aliquam erat volutpat. Integer eu semper sem. Suspendisse potenti. Nunc sed lorem quis nulla semper sagittis. Nulla facilisi. Ut rhoncus accumsan massa, eu convallis justo vulputate in. Vivamus congue lectus in justo laoreet, vel dictum ex efficitur.
      
      Quisque nec pharetra quam. Sed ac velit euismod, ullamcorper ex a, dignissim sem. Etiam ut massa eget risus auctor dictum. Integer ultricies ipsum et feugiat laoreet. Fusce elementum feugiat cursus. Nullam vel fermentum elit, eu tempus quam. Ut tincidunt vulputate dui, a fringilla tortor hendrerit eu. In ac imperdiet nunc. Integer efficitur nulla a justo luctus feugiat. Phasellus auctor, justo eu facilisis cursus, nisi odio fermentum tellus, eget consequat lectus erat vel lectus. Suspendisse ullamcorper nulla in est blandit, vel dictum odio pulvinar.
      
      Praesent in tortor vel mauris imperdiet tincidunt. Vestibulum in fermentum turpis. Integer nec quam elit. Suspendisse potenti. Duis commodo facilisis laoreet. Sed at est vel justo dapibus dapibus vel a ligula. Duis a orci quis nisl fermentum cursus. Fusce lacinia augue a suscipit vestibulum.
      `,
    },
    {
      name: 'Hammer Austin',
      role: { nameLong: 'Jefe de Tecnología, Gestor de Personal Técnico' },
      image: imageBaseUrl + '/placeholder-crew.jpg',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante eget justo condimentum dapibus. Nullam sit amet ultricies sem. Fusce nec urna euismod, posuere metus a, vestibulum libero. Nullam consectetur, augue a volutpat tincidunt, neque justo cursus libero, in luctus ligula sem vel justo. Integer a elit vitae justo venenatis mattis. Vivamus auctor bibendum ante, eget vulputate turpis suscipit eget. Etiam non justo a purus condimentum volutpat nec vitae justo.

      Pellentesque euismod, eros eget tincidunt rhoncus, mauris lacus elementum tellus, id eleifend metus libero vel tortor. Aliquam erat volutpat. Integer eu semper sem. Suspendisse potenti. Nunc sed lorem quis nulla semper sagittis. Nulla facilisi. Ut rhoncus accumsan massa, eu convallis justo vulputate in. Vivamus congue lectus in justo laoreet, vel dictum ex efficitur.
      
      Quisque nec pharetra quam. Sed ac velit euismod, ullamcorper ex a, dignissim sem. Etiam ut massa eget risus auctor dictum. Integer ultricies ipsum et feugiat laoreet. Fusce elementum feugiat cursus. Nullam vel fermentum elit, eu tempus quam. Ut tincidunt vulputate dui, a fringilla tortor hendrerit eu. In ac imperdiet nunc. Integer efficitur nulla a justo luctus feugiat. Phasellus auctor, justo eu facilisis cursus, nisi odio fermentum tellus, eget consequat lectus erat vel lectus. Suspendisse ullamcorper nulla in est blandit, vel dictum odio pulvinar.
      
      Praesent in tortor vel mauris imperdiet tincidunt. Vestibulum in fermentum turpis. Integer nec quam elit. Suspendisse potenti. Duis commodo facilisis laoreet. Sed at est vel justo dapibus dapibus vel a ligula. Duis a orci quis nisl fermentum cursus. Fusce lacinia augue a suscipit vestibulum.
      `,
    },
  ];
}
