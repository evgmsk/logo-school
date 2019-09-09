import { Component, OnInit, Input } from '@angular/core';

import {MediaCard} from '../../interfaces/media-card.interface';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  @Input() card: MediaCard;
  @Input() index: number | string;
  @Input() className: string;
  @Input() descriptionLength: number;
  @Input() imgLink = false;

  constructor() { }

  ngOnInit() {
    this.className = `${this.className} ${this.card.image.split('.')[0]}`;
    this.card.title = this.card.name || this.card.title;
    this.card.description = this.card.content || this.card.description;
    this.descriptionLength = this.descriptionLength || 100;
  }
}
