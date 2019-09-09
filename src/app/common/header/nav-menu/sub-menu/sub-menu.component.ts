import { Component, OnInit, ViewEncapsulation, OnDestroy, Input } from '@angular/core';

import {NavService} from '../../../../services/nav.service';
import {Route} from '../../../../interfaces/route.interface';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SubMenuComponent implements OnInit, OnDestroy {
  dropdownOpen = false;
  subscription: any;
  @Input() routes: Route[];
  constructor(private service: NavService ) {
  }

  ngOnInit() {
    this.subscription = this.service.onStateChange.subscribe(state => {
      this.dropdownOpen = state;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openSubMenu() {
    this.service.onOpenDropdown();
  }
  onSelectMenuItem() {
    this.service.onCloseDropdown();
  }
}
