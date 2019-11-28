import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialGraphComponent } from './initial-graph.component';

describe('InitialGraphComponent', () => {
  let component: InitialGraphComponent;
  let fixture: ComponentFixture<InitialGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
