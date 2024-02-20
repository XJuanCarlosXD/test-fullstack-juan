import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  basePath: string = 'assets/images/';
  itemsAse: { image: string; link: string }[] = [];

  constructor() {
    this.itemsAse = [
      { image: 'logo-la_colonial.png', link: '#' },
      { image: 'futuro_logo.svg', link: '#' },
      { image: 'patria_logo.png', link: '#' },
      { image: 'logo_humano.svg', link: '#' },
      { image: 'logo_aps.png', link: '#' },
      { image: 'logo_atlantica.png', link: '#' },
    ];
  }
}
