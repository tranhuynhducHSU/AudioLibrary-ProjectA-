import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArtisComponent } from './item-artis.component';

describe('ItemArtisComponent', () => {
  let component: ItemArtisComponent;
  let fixture: ComponentFixture<ItemArtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemArtisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemArtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
