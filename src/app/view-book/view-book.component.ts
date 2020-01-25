import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  constructor(public sc:ServletService) { }

  book: any[] = [];
 
  lib: any[] = [];
  ngOnInit() {
   
this.fetchdata();
  }

  
  obj: any = {};
  deleteData(i) {

    this.obj.id = this.book[i].id;
    console.log(this.obj.id);

    this.sc.deletebook(this.obj).subscribe(d=>
      {

        alert("deleted successfully")
        this.fetchdata();
    });
    
  }
  fetchdata(){
    this.sc.viewbook().subscribe((d: any) => this.book = d);
  }


}
