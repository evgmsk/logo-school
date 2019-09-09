import { Component, OnInit, Input } from '@angular/core';

import {PersonCard} from '../../interfaces/person-card.interface';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: PersonCard;
  constructor() { }

  ngOnInit() {
  }
}
