import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';

@Component({
  selector: 'app-view-issue-book',
  templateUrl: './view-issue-book.component.html',
  styleUrls: ['./view-issue-book.component.css']
})
export class ViewIssueBookComponent implements OnInit {

  Ilib: any[] = [];
  
  constructor(public sc:ServletService) { }

  ngOnInit() {

    this.sc.viewIssuebook().subscribe((d: any) => this.Ilib = d);

  }

}
