import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionAboutComponent } from './reception-about.component';

describe('ReceptionAboutComponent', () => {
  let component: ReceptionAboutComponent;
  let fixture: ComponentFixture<ReceptionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
