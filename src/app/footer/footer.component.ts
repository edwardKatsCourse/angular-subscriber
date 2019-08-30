import { Component, OnInit } from '@angular/core';
import {ColorChangerService} from "../color-changer.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  color: string;

  constructor(public colorChangeService: ColorChangerService) { }

  ngOnInit() {
    this.colorChangeService.getSubscriber().subscribe(x => this.color = x.color);
    this.color = this.colorChangeService.getCurrentColor().color;
  }

}
