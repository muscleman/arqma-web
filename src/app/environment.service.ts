import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  public buildBaseImageRef(imagePath: string): string {
    if (imagePath.startsWith('/'))
      return `${environment.base_href}/${this.locale}${imagePath}`
    else
      return `${environment.base_href}/${this.locale}/${imagePath}`
  }

  public buildBaseRef(locale: string): string {
      if (locale.startsWith('/'))
        return `${environment.base_href}${locale}`
      else
        return `${environment.base_href}/${locale}`
  }
}
