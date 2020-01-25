import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  constructor(public sc:ServletService,public r:Router) { }

  libraryform: FormGroup;
  ngOnInit() {
    this.libraryform = new FormGroup(
      {
        callno: new FormControl('', [Validators.required]),
        studid: new FormControl('', [Validators.required]),
        sname: new FormControl(''),
        smobno: new FormControl(''),
        
      });
  }

  addIssuebook()
  {
    console.log(this.libraryform.value);
    this.sc.addissuebook(this.libraryform.value).subscribe((d =>this.my(d)))
  }

  com:any[]=[];
  name:string=null;
  mobno:string=null;
  onKeydown(x)
  {
    console.log(x);
    this.sc.viewStudent().subscribe((r:any)=>
    {
      this.com=r;
      
      for(let i=0;i<this.com.length;i++)
      {
        
        if(this.com[i].sid==x)
        {           
           this.name=this.com[i].sname;
           this.mobno=this.com[i].smobno;
           break;
        }
      }
    });
  }

 my(d) 
 {
   if (d.Msg=="successfully")
    {
     alert("successfully");
     this.r.navigate(['/admin/vwisbk']);
   }
   else
    {
     alert("not successfully");
   }

}
}
