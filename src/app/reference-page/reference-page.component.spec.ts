import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencePageComponent } from './reference-page.component';

describe('ReferencePageComponent', () => {
  let component: ReferencePageComponent;
  let fixture: ComponentFixture<ReferencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
