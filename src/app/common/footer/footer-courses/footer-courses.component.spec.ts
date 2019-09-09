import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCoursesComponent } from './footer-courses.component';

describe('FooterCoursesComponent', () => {
  let component: FooterCoursesComponent;
  let fixture: ComponentFixture<FooterCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
