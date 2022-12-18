import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionLastRealizationsComponent } from './reception-last-realizations.component';

describe('ReceptionLastRealizationsComponent', () => {
  let component: ReceptionLastRealizationsComponent;
  let fixture: ComponentFixture<ReceptionLastRealizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionLastRealizationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionLastRealizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
