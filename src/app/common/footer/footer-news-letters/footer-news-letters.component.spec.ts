import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNewsLettersComponent } from './footer-news-letters.component';

describe('FooterNewsLettersComponent', () => {
  let component: FooterNewsLettersComponent;
  let fixture: ComponentFixture<FooterNewsLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNewsLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNewsLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
