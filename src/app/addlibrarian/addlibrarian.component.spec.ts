import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlibrarianComponent } from './addlibrarian.component';

describe('AddlibrarianComponent', () => {
  let component: AddlibrarianComponent;
  let fixture: ComponentFixture<AddlibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
