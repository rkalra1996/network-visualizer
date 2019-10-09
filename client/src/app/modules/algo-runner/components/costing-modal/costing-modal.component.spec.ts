import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingModalComponent } from './costing-modal.component';

describe('CostingModalComponent', () => {
  let component: CostingModalComponent;
  let fixture: ComponentFixture<CostingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
