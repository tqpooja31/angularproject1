import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlibrarianComponent } from './viewlibrarian.component';

describe('ViewlibrarianComponent', () => {
  let component: ViewlibrarianComponent;
  let fixture: ComponentFixture<ViewlibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
