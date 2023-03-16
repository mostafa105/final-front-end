import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerouteComponent } from './pageroute.component';

describe('PagerouteComponent', () => {
  let component: PagerouteComponent;
  let fixture: ComponentFixture<PagerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
