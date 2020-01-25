import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelibrarian',
  templateUrl: './updatelibrarian.component.html',
  styleUrls: ['./updatelibrarian.component.css']
})
export class UpdatelibrarianComponent implements OnInit {

  libraryform: FormGroup;
  constructor(public sc: ServletService,private a:ActivatedRoute,private r:Router) { }

  tp:number;
  lib: any[] = [];

  list:any={}; 
 
  ngOnInit() {

    this.tp=this.a.snapshot.params['i'];

    this.sc.Viewdata().subscribe((d: any) =>
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
    
    this.sc.updatedata(this.list).subscribe(d=>
      {
         this.r.navigate(['/admin/view']);
      });   

  }

}
