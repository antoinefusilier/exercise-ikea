import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTestComponent } from './sub-test.component';

describe('SubTestComponent', () => {
  let component: SubTestComponent;
  let fixture: ComponentFixture<SubTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
