import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlibrarian',
  templateUrl: './addlibrarian.component.html',
  styleUrls: ['./addlibrarian.component.css']
})
export class AddlibrarianComponent implements OnInit {

  libraryform: FormGroup;
  constructor(public sc: ServletService, private r: Router) { }
  ngOnInit() {
    this.libraryform = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z \-\']+")]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
        mobno: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
      });
  }

  keyPress(event: any) {
    const pattern = /[0-9\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  librarian: any;

  addlib() {
    //this.sc.Adddata(this.libraryform.value).subscribe((a:any)=>this.librarian=a,(err)=>console.log("error"));
    this.sc.Adddata(this.libraryform.value).subscribe((d => this.my(d)))
  }

  my(d) 
  {
    if (d.Msg == "successfully")
     {
      alert("successfully");
      this.r.navigate(['/admin/view']);
    }
    else if (d.Msg == "Exist") 
    {
      alert("Email already exist");
      
    }
    else {
      alert("not successfully");
    }
  }




}
