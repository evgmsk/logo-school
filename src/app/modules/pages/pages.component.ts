import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  state,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
  //   transition('void <=> *', animate(300, keyframes([
  //     style({
  //       opacity: 0,
  //       offset: 0,
  //     }),
  //     style({
  //       opacity: .5,
  //       offset: 0.8,
  //     }),
  //     style({
  //       opacity: 1,
  //       offset: 1,
  //     })
  //   ])))
  // ]),
    trigger('pagesAnim', [
      // state('on', style({
      //   transform: 'scale(2)',
      //   backgroundColor: 'green'
      // })),
      state('off', style({
        backgroundColor: 'red'
      })),
      transition('* <=> *', animate(200))
  ])
  ]
})
export class PagesComponent implements OnInit {
  pageState: string;

  constructor() { }

  ngOnInit() {
    this.pageState = 'off';
  }
  
  toggleState() {
    this.pageState = this.pageState === 'off' ? 'on' : 'off'
  }
}
