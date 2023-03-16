import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackfilterComponent } from './trackfilter.component';

describe('TrackfilterComponent', () => {
  let component: TrackfilterComponent;
  let fixture: ComponentFixture<TrackfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
