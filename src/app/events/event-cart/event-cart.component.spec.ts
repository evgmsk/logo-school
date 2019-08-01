import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCartComponent } from './event-cart.component';

describe('EventCartComponent', () => {
  let component: EventCartComponent;
  let fixture: ComponentFixture<EventCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
