import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';

import {Route} from '../../../../interfaces/route.interface';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubMenuComponent {
  @Input() routes: Route[];
  constructor() {
  }
}
