import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionSliderComponent } from './reception-slider.component';

describe('ReceptionSliderComponent', () => {
  let component: ReceptionSliderComponent;
  let fixture: ComponentFixture<ReceptionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
