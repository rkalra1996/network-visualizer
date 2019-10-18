import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalResultComponent } from './statistical-result.component';

describe('StatisticalResultComponent', () => {
  let component: StatisticalResultComponent;
  let fixture: ComponentFixture<StatisticalResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
