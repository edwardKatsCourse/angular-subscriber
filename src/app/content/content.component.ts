import {Component, OnInit} from '@angular/core';
import {ColorChangerService} from "../color-changer.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  color: string;

  constructor(public colorChangeService: ColorChangerService) {
  }

  ngOnInit() {
    this.colorChangeService.getSubscriber().subscribe(x => this.color = x.color);
    this.color = this.colorChangeService.getCurrentColor().color;
  }

  changeColor(color) {
    this.colorChangeService.changeColor(color);
  }

}
