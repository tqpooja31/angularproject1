import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  constructor(public sc: ServletService,private a:ActivatedRoute,private r:Router) { }

  tp:number;
  lib: any[] = [];

  list:any={}; 
 
  ngOnInit() {

    this.tp=this.a.snapshot.params['i'];

    this.sc.viewStudent().subscribe((d: any) =>
    {
      this.lib = d

      for(let i=0;i<this.lib.length;i++)
      {
        if(i==this.tp)
        {
          this.list=this.lib[i];
          break;
        }
      }
    });

 
  }

  addlib()
  {
    
    this.sc.updatestudent(this.list).subscribe(d=>
      {
         this.r.navigate(['/admin/vwst']);
      });   

  }


}
