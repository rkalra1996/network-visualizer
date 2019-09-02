import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class ColorServiceService {
  private colorConfig = {
    defaultColor: {
      // Academia: '#ff4444',
      // Consulting: '#ffbb33',
      // Government: '#00C851',
      // 'Impact Investor': '#33b5e5',
      // 'International Agency': '#CC0000',
      // Media: '#FF8800',
      // 'NGO/CBO': '#007E33',
      // People: '#0099CC',
      // Philanthropy: '#9933CC',
      // Platform: '#0d47a1',
      // 'Private Sector': '#2BBBAD',
      // 'Research Institute': '#c51162'

    },
    selectedColor: {
      // Academia: '#ff4444',
      // Consulting: '#ffbb33',
      // Government: '#00C851',
      // 'Impact Investor': '#33b5e5',
      // 'International Agency': '#CC0000',
      // Media: '#FF8800',
      // 'NGO/CBO': '#007E33',
      // People: '#0099CC',
      // Philanthropy: '#9933CC',
      // Platform: '#0d47a1',
      // 'Private Sector': '#2BBBAD',
      // 'Research Institute': '#c51162'

    },
    deletedColor: {
      colorCode: '#C0C0C0',
      highlightColorCode: '#9a9a9a'
    },
    restoreColor: {
      colorCode: '#96C1FA',
      highlightColorCode: '#249BFC'
    },
    initialColor: {
      colorCode: '#96C1FA'
    }
  };
 
  public colorObj$ = new BehaviorSubject<object>(this.colorConfig);

  constructor() {
  }
  updateDefaultColor(data){
    this.colorConfig.defaultColor = data;
    this.colorObj$.next(this.colorConfig);
  }
  insertIntoDefaultColor(data){
    if(!this.colorConfig.defaultColor[data['type']]){
      this.colorConfig.defaultColor[data['type']] = data['color'];
      this.colorObj$.next(this.colorConfig);
    }
  }
}
