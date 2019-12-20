import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffyListComponent } from './stuffy-list.component';

describe('StuffyListComponent', () => {
  let component: StuffyListComponent;
  let fixture: ComponentFixture<StuffyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
