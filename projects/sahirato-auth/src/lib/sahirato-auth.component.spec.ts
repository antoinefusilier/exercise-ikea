import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahiratoAuthComponent } from './sahirato-auth.component';

describe('SahiratoAuthComponent', () => {
  let component: SahiratoAuthComponent;
  let fixture: ComponentFixture<SahiratoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahiratoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahiratoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
