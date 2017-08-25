import { TestBed, inject } from '@angular/core/testing';

import { PhoneBookService } from './phonebook.service';

describe('PhonebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneBookService]
    });
  });

  it('should be created', inject([PhoneBookService], (service: PhoneBookService) => {
    expect(service).toBeTruthy();
  }));
});
