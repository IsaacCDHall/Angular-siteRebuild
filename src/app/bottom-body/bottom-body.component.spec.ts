import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBodyComponent } from './bottom-body.component';

describe('BottomBodyComponent', () => {
  let component: BottomBodyComponent;
  let fixture: ComponentFixture<BottomBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
