import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMusicComponent } from './chart-music.component';

describe('ChartMusicComponent', () => {
  let component: ChartMusicComponent;
  let fixture: ComponentFixture<ChartMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
