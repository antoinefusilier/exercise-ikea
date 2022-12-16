import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationPreviewComponent } from './realization-preview.component';

describe('RealizationPreviewComponent', () => {
  let component: RealizationPreviewComponent;
  let fixture: ComponentFixture<RealizationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
