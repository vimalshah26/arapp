import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArListItemComponent } from './ar-list-item.component';

describe('ArListItemComponent', () => {
  let component: ArListItemComponent;
  let fixture: ComponentFixture<ArListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
