import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  public buildImageUrl(imagePath: string): string {
    if (imagePath.startsWith('/'))
      return `${environment.base_href}${imagePath}`
    else
      return `${environment.base_href}/${imagePath}`
  }
}
