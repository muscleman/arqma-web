import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LOCALE_ID,
          useValue: 'en-US'
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
