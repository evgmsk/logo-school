import { Component, OnInit, Input } from '@angular/core';

import {StatBanner} from '../../../interfaces/stat-banner.interface';

@Component({
  selector: 'app-about-statistic-banner',
  templateUrl: './about-statistic-banner.component.html',
  styleUrls: ['./about-statistic-banner.component.scss']
})
export class AboutStatisticBannerComponent implements OnInit {
  @Input() data: StatBanner;
  constructor() { }

  ngOnInit() {
  }

}
