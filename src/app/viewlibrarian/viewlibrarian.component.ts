import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';

@Component({
  selector: 'app-viewlibrarian',
  templateUrl: './viewlibrarian.component.html',
  styleUrls: ['./viewlibrarian.component.css']
})
export class ViewlibrarianComponent implements OnInit {

  constructor(public sc: ServletService) { }

  lib: any[] = [];
  ngOnInit() {
   
this.fetchdata();
  }

  
  obj: any = {};
  deleteData(i) {

    this.obj.id = this.lib[i].id;
    console.log(this.obj.id);

    this.sc.deletedata(this.obj).subscribe(d=>
      {

        alert("deleted successfully")
        this.fetchdata();
    });
    
  }
  fetchdata(){
    this.sc.Viewdata().subscribe((d: any) => this.lib = d);
  }


}




