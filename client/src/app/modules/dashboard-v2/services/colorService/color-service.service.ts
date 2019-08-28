import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorServiceService {

  private defaultColor = {
      // Academia  : '#ff4444',
      // Consulting : '#ffbb33',
      // Government : '#00C851',
      // 'Impact Investor' : '#33b5e5',
      // 'International Agency' : '#CC0000',
      // Media : '#FF8800',
      // 'NGO/CBO' : '#007E33',
      // People : '#0099CC',
      // Philanthropy : '#9933CC',
      // Platform : '#0d47a1',
      // 'Private Sector' : '#2BBBAD',
      // 'Research Institute': '#c51162'
  };

  public colorObj$ = new BehaviorSubject<object>(this.defaultColor);

  constructor() {
  }
}
