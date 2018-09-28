import { TestBed, inject } from '@angular/core/testing';

import { textService } from './servicios/text.service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [textService]
    });
  });

  it('should be created', inject([textService], (service: textService) => {
    expect(service).toBeTruthy();
  }));
});
