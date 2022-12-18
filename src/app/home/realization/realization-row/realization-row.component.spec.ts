import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationRowComponent } from './realization-row.component';

describe('RealizationRowComponent', () => {
  let component: RealizationRowComponent;
  let fixture: ComponentFixture<RealizationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
