import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  @Input() routes: any;
  dropdown = false;
  constructor() {
  }

  ngOnInit() {
  }

  openSubMenu() {
    this.dropdown = !this.dropdown;
  }
}
