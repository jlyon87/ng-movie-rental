import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { RouterMock } from '../../mock/ng/router.mock';

describe('SearchService', () => {
  let router: Router;
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouterMock]
    });
    router = TestBed.inject(Router);
    router.navigate = jest.fn().mockResolvedValue(true);

    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search', () => {
    it('should invoke navigate with params', async () => {
      const term = 'Chorizo Your Own Adventure Burger';
      await service.search(term);

      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith(['search'], {
        queryParams: { term }
      });
    });
  });
});
