import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibEventBusRmComponent } from './lib-event-bus-rm.component';

describe('LibEventBusRmComponent', () => {
  let component: LibEventBusRmComponent;
  let fixture: ComponentFixture<LibEventBusRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibEventBusRmComponent]
    });
    fixture = TestBed.createComponent(LibEventBusRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
