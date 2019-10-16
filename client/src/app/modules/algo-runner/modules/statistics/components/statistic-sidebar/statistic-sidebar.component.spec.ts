import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticSidebarComponent } from './statistic-sidebar.component';

describe('StatisticSidebarComponent', () => {
  let component: StatisticSidebarComponent;
  let fixture: ComponentFixture<StatisticSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
