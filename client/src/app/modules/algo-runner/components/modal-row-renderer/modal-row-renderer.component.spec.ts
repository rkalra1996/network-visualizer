import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRowRendererComponent } from './modal-row-renderer.component';

describe('ModalRowRendererComponent', () => {
  let component: ModalRowRendererComponent;
  let fixture: ComponentFixture<ModalRowRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRowRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRowRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
