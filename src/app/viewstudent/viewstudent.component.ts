import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(public sc: ServletService) { }

  stud: any[] = [];
  ngOnInit() {
   
this.fetchdata();
  }

  
  obj: any = {};
  deleteData(i) {

    this.obj.sid = this.stud[i].sid;
    console.log(this.obj.sid);

    this.sc.deletestudent(this.obj).subscribe(d=>
      {

        alert("deleted successfully")
        this.fetchdata();
    });
    
  }
  fetchdata(){
    this.sc.viewStudent().subscribe((d: any) => this.stud = d);
  }


}
