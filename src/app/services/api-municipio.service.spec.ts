import { TestBed } from '@angular/core/testing';

import { ApiMunicipioService } from './api-municipio.service';

describe('ApiMunicipioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMunicipioService = TestBed.get(ApiMunicipioService);
    expect(service).toBeTruthy();
  });
});
