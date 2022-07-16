import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  public buildBaseImageRef(imagePath: string): string {
    let result = environment.base_href
    if (this.locale && this.locale.startsWith('/')) {
      result += this.locale
    } else {
      result += !!environment.base_href ? `/${this.locale}` : ''
    }
    if (imagePath.startsWith('/')) {
      result += imagePath
    } else {
      result += `/${imagePath}`
    }
    return result
  }

  public buildBaseRef(locale: string): string {
      // let result = ''
      // if (locale.startsWith('/'))
      //   result = `${environment.base_href}${!!environment.base_href ? locale : ''}`
      // else
      //   result = `${environment.base_href}/${!!environment.base_href ? locale : ''}`
      // return result
      return ""
  }
}
