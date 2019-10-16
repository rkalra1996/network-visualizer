import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalContentComponent } from './statistical-content.component';

describe('StatisticalContentComponent', () => {
  let component: StatisticalContentComponent;
  let fixture: ComponentFixture<StatisticalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
