import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }

  goback()
  {
    this.r.navigate(['/login']);
  }


}
