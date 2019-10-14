import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {StatBanner} from '../../../interfaces/stat-banner.interface';

@Component({
  selector: 'app-about-statistic',
  templateUrl: './about-statistic.component.html',
  styleUrls: ['./about-statistic.component.scss']
})

export class AboutStatisticComponent implements OnInit {
  schoolStats: Observable<StatBanner[]>;
  constructor(private store: Store<{schoolStats: StatBanner[]}>) { }

  ngOnInit() {
    this.schoolStats = this.store.select('schoolStats');
  }

}
