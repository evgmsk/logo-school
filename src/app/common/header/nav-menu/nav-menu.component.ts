import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Routes} from '../../../interfaces/route.interface';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavMenuComponent implements OnInit {
  @Input() className: string;
  routes = Routes;
  constructor() {
  }

  ngOnInit() {
  }
}
