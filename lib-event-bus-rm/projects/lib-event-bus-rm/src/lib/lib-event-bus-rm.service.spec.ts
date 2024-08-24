import { TestBed } from '@angular/core/testing';

import { LibEventBusRmService } from './lib-event-bus-rm.service';

describe('LibEventBusRmService', () => {
  let service: LibEventBusRmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibEventBusRmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
