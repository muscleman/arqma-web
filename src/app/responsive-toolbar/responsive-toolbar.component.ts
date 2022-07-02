import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from '../environment.service';
import { MenuItem } from '../menu-item';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {
  logo = this.environmentService.buildImageUrl("/assets/images/white_logo_transparent_background-250x93.png")
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
      label: 'Press_Kit',
      icon: 'calendar_today',
      link: ['/presskit']
    },
    {
      label: 'Language',
      icon: '',
      link: []
    }
  ]

  constructor(private environmentService: EnvironmentService, public translate: TranslateService) {
    translate.addLangs(['en', 'pl'])
    translate.setDefaultLang('en')
  }

  switchLang(lang: string) {
    this.translate.use(lang)
  }

  ngOnInit(): void {
  }

}
