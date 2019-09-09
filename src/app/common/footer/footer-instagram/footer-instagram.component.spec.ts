import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInstagramComponent } from './footer-instagram.component';

describe('FooterInstagramComponent', () => {
  let component: FooterInstagramComponent;
  let fixture: ComponentFixture<FooterInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
