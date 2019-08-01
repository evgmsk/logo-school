import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  dropdown = false;
  routes = [
    {name: 'home', path: '/home'},
    {name: 'courses', path: '/courses'},
    {name: 'events', path: '/events'},
    {name: 'pages', sub_links: [{name: 'page1', path: '/pages'}, {name: 'page2', path: '/pages'}]},
    {name: 'contacts', path: '/contacts'},
  ];
  constructor() { }

  ngOnInit() {
  }
  openSubMenu() {
    this.dropdown = !this.dropdown;
  }
}
