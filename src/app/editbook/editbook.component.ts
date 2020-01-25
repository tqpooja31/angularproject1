import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  constructor(public sc: ServletService,private a:ActivatedRoute,private r:Router) { }
  tp:number;
  lib: any[] = [];

  list:any={};
  libraryform: FormGroup;
  ngOnInit() {
    // this.libraryform = new FormGroup(
    //   {
    //     callno: new FormControl('', [Validators.required]),
    //     bname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //     author: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //     publisher: new FormControl('', [Validators.required,Validators.minLength(5)]),
    //     quantity: new FormControl('', [Validators.required]),
    //     // issue: new FormControl('', [Validators.required]),
    //   });
   
 
 

    this.tp=this.a.snapshot.params['i'];

    this.sc.viewbook().subscribe((d: any) =>
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
    
    this.sc.updatebook(this.list).subscribe(d=>
      {
         this.r.navigate(['/librarian/vwbk']);
      });   

  }


}
