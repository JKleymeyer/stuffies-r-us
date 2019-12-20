import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffyAddListComponent } from './stuffy-add-list.component';

describe('StuffyAddListComponent', () => {
  let component: StuffyAddListComponent;
  let fixture: ComponentFixture<StuffyAddListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffyAddListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffyAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
