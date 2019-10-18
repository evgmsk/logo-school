import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('homeAnimations', [
      transition('void <=> *', animate(300, keyframes([
        style({
          // marginRight: '100px',
           transform: 'translateX(-50px)',
           opacity: 0,
           offset: 0,
         }),
         style({
           transform: 'translateX(-25px)',
           opacity: .5,
           offset: 0.4,
         }),
         style({
          transform: 'translateX(-10px)',
           opacity: .5,
           offset: 0.7,
         }),
         style({
          // marginRight: '0',
            transform: 'translateX(0)',
           opacity: 1,
           offset: 1,
         })
      ])))
    ])
  ]
})
export class HomeComponent implements OnInit {
  pageState = 'init'
  constructor() { }

  ngOnInit() {

  }
}
