import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private c:ServletService,private r:Router) { }

  ngOnInit() {  }
  res:any={};
  add(x) {
   
    this.c.chklogin(x).subscribe((e:any)=>
    {
      this.res=e;
      if(this.res.status=="successfully")
      {
        localStorage.setItem("curr",JSON.stringify(x.email));
        this.r.navigate(['librarian']);
      }
      else if(this.res.status=="admin")
      {
        localStorage.setItem("curr",JSON.stringify(x.email));
        this.r.navigate(['admin']);
      }
   
    });

  }





}
