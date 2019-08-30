import {Injectable, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Color} from "./color";

@Injectable({
  providedIn: 'root'
})
export class ColorChangerService {

  color = new Subject<Color>();

  constructor() {
    if (!localStorage.getItem('color')) {
      localStorage.setItem('color', 'success');
    }
    this.color.next(new Color(localStorage.getItem('color')));
  }

  //write
  changeColor(color) {
    localStorage.setItem('color', color);
    this.color.next(new Color(color));
  }

  getSubscriber(): Subject<Color> {
    return this.color;
  }

  getCurrentColor() {
    return new Color(localStorage.getItem('color'));
  }
}
