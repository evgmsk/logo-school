import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-instagram',
  templateUrl: './footer-instagram.component.html',
  styleUrls: ['./footer-instagram.component.scss']
})
export class FooterInstagramComponent implements OnInit {
  instgramLinks: string[];
  className: string;
  constructor() {
    this.className = 'inst';
  }

  ngOnInit() {
    this.instgramLinks = new Array(6).fill('https://www.instagram.com/honestfoodmagazine/');
  }

}
