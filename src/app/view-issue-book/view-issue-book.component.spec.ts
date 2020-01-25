import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssueBookComponent } from './view-issue-book.component';

describe('ViewIssueBookComponent', () => {
  let component: ViewIssueBookComponent;
  let fixture: ComponentFixture<ViewIssueBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIssueBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssueBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
