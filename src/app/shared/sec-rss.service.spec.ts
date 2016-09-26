/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecRssService } from './sec-rss.service';

describe('Service: SecRss', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecRssService]
    });
  });

  it('should ...', inject([SecRssService], (service: SecRssService) => {
    expect(service).toBeTruthy();
  }));
});
