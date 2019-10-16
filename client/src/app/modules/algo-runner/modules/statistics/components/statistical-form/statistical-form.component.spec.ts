import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalFormComponent } from './statistical-form.component';

describe('StatisticalFormComponent', () => {
  let component: StatisticalFormComponent;
  let fixture: ComponentFixture<StatisticalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
