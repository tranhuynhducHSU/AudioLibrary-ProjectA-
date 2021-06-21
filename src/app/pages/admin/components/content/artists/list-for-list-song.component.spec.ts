import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForListSongComponent } from './list-for-list-song.component';

describe('ListForListSongComponent', () => {
  let component: ListForListSongComponent;
  let fixture: ComponentFixture<ListForListSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListForListSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForListSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
