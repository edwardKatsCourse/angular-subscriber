import {Component, OnInit} from '@angular/core';
import {ColorChangerService} from "../../color-changer.service";

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  color: string;

  constructor(public colorService: ColorChangerService) {
  }

  ngOnInit() {
    this.colorService.getSubscriber().subscribe(x => this.color = x.color);
    this.color = this.colorService.getCurrentColor().color;
  }

}
