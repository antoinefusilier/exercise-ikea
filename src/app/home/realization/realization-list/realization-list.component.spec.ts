import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationListComponent } from './realization-list.component';

describe('RealizationListComponent', () => {
  let component: RealizationListComponent;
  let fixture: ComponentFixture<RealizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
