import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSearchAndUserComponent } from './head-search-and-user.component';

describe('HeadSearchAndUserComponent', () => {
  let component: HeadSearchAndUserComponent;
  let fixture: ComponentFixture<HeadSearchAndUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadSearchAndUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSearchAndUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
