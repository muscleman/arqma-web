import { Component, OnInit } from '@angular/core'
import { EnvironmentService } from '../environment.service'
import { MenuItem } from '../menu-item'

interface Locale {
  localCode: string
  label: string
}

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {
  logo = this.environmentService.buildBaseImageRef("/assets/images/white_logo_transparent_background-250x93.png")

  Languages: string = $localize`:Languages@@Languages:Languages`

  menuItems: MenuItem[] = [
    {
      label: $localize`:Home@@Home:Home`,
      icon: 'home',
      link: ['/home']
    },
    {
      label: $localize`:Downloads@@Downlods:Downloads`,
      icon: 'download',
      link: ['/downloads']
    },
    {
      label: $localize`:Press_Kit@@Press_Kit:Press Kit`,
      icon: 'calendar_today',
      link: ['/presskit']
    }
  ]

  locales: Locale[] = [
    {localCode: this.environmentService.buildBaseRef('en-US/'), label: $localize`:English@@English:English`},
    {localCode: this.environmentService.buildBaseRef('pl-PL/'), label: $localize`:Polish@@Polish:Polish`}
  ]

  constructor(private environmentService: EnvironmentService) {
  }

  switchLang(lang: string) {
    location.href = lang
  }

  ngOnInit(): void {
  }

}
