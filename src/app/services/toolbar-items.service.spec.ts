import { TestBed } from '@angular/core/testing';

import { ToolbarItemsService } from './toolbar-items.service';

describe('ToolbarItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarItemsService = TestBed.get(ToolbarItemsService);
    expect(service).toBeTruthy();
  });
});
