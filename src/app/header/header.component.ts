import { Component, OnInit } from '@angular/core';
import {ColorChangerService} from "../color-changer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  color: string;
  constructor(public colorChangerService: ColorChangerService) { }

  ngOnInit() {
    this.colorChangerService.getSubscriber().subscribe(x => this.color = x.color);
    this.color = this.colorChangerService.getCurrentColor().color;
  }

}
