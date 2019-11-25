import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';

import {RouteI} from '../../../../interfaces/route.interface';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubMenuComponent {
  @Input() routes: RouteI;
  constructor() {
  }
}
