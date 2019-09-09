import { Component, OnInit } from '@angular/core';
import {Routes} from '../../../interfaces/route.interface';

@Component({
  selector: 'app-device-menu',
  templateUrl: './device-menu.component.html',
  styleUrls: ['./device-menu.component.scss']
})
export class DeviceMenuComponent implements OnInit {
  open = false;
  routes = Routes;
  constructor() { }

  ngOnInit() {
  }
  onClick(): void {
    this.open = !this.open;
  }
}
