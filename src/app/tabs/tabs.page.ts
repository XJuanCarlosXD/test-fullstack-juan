import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  menuItems: { text: string; link: string; icon: string; tab: string }[] = [];

  constructor() {
    this.menuItems = [
      { text: 'Inicio', link: '/tabs/tab1', icon: 'home-outline', tab: 'tab1' },
      {
        text: 'Guardados',
        link: '/tabs/tab2',
        icon: 'bag-outline',
        tab: 'tab2',
      },
      {
        text: 'Mi poliza',
        link: '/tabs/tab3',
        icon: 'clipboard-outline',
        tab: 'tab3',
      },
      {
        text: 'Ayuda',
        link: '/tabs/tab4',
        icon: 'chatbox-ellipses-outline',
        tab: 'tab4',
      },
    ];
  }
}
