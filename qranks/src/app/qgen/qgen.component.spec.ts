import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QgenComponent } from './qgen.component';

describe('QgenComponent', () => {
  let component: QgenComponent;
  let fixture: ComponentFixture<QgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
