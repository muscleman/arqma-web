import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: ['/home']
    },
    {
      label: 'Downloads',
      icon: 'download',
      link: ['/downloads']
    },
    {
      label: 'Press Kit',
      icon: 'calendar_today',
      link: ['/presskit']
    },
    {
      label: 'Language',
      icon: 'language',
      link: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
