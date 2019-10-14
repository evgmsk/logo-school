import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStatisticBannerComponent } from './about-statistic-banner.component';

describe('AboutStatisticBannerComponent', () => {
  let component: AboutStatisticBannerComponent;
  let fixture: ComponentFixture<AboutStatisticBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStatisticBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStatisticBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
