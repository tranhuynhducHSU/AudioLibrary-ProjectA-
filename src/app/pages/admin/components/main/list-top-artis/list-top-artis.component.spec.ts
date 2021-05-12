import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopArtisComponent } from './list-top-artis.component';

describe('ListTopArtisComponent', () => {
  let component: ListTopArtisComponent;
  let fixture: ComponentFixture<ListTopArtisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTopArtisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopArtisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
