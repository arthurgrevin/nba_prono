/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PronoService } from './prono.service';

describe('Service: Prono', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PronoService]
    });
  });

  it('should ...', inject([PronoService], (service: PronoService) => {
    expect(service).toBeTruthy();
  }));
});
