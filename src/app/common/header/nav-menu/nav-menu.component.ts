import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';

import {Route, Routes} from '../../../interfaces/route.interface';
import {NavService} from '../../../services/nav.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavMenuComponent implements OnInit, OnDestroy {
  dropdownOpen = false;
  subscription: any;
  routes = Routes;
  @Input() className: string;
  constructor(private sevice: NavService) {
  }

  ngOnInit() {
    this.subscription = this.sevice.onStateChange.subscribe((state: boolean) => {
        this.dropdownOpen = state;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openSubMenu() {
    this.sevice.onOpenDropdown();
  }
  onClick() {
    this.sevice.onCloseDropdown();
  }
}
