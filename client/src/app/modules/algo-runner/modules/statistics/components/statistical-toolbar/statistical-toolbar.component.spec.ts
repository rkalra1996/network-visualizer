import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalToolbarComponent } from './statistical-toolbar.component';

describe('StatisticalToolbarComponent', () => {
  let component: StatisticalToolbarComponent;
  let fixture: ComponentFixture<StatisticalToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticalToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
