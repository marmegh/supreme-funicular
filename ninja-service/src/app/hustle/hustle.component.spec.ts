import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HustleComponent } from './hustle.component';

describe('HustleComponent', () => {
  let component: HustleComponent;
  let fixture: ComponentFixture<HustleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HustleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HustleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
