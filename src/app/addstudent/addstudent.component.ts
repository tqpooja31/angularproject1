import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  Studentform: FormGroup;
  constructor(public sc: ServletService,private r:Router) { }
  ngOnInit() {
    this.Studentform = new FormGroup(
      {
        sid: new FormControl('', [Validators.required]),
        sname: new FormControl('', [Validators.required,Validators.pattern("[A-Za-z]{1,32}")]),
        smobno: new FormControl('', [Validators.required,Validators.minLength(10)]),
        email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")])
    });
  }

  student: any;
 //,Validators.pattern("/^[a-zA-z]$/")"^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$"
 //,Validators.pattern("/^[7-9][0-9]{9}$/")Validators.pattern("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/")
  addlib()
   {
         //this.sc.Adddata(this.libraryform.value).subscribe((a:any)=>this.librarian=a,(err)=>console.log("error"));
         this.sc.addstudent(this.Studentform.value).subscribe((d => this.my(d)))
  }

  my(d) 
  {
    if (d.Msg=="successfully")
     {
      alert("successfully");
       this.r.navigate(['/admin/vwst']);
    }
    else
     {
      alert("not successfully");
    }
  }


}
