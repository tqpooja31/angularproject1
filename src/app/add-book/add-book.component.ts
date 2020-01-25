import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(public sc:ServletService,private r:Router) { }

  libraryform: FormGroup;
  ngOnInit() {
    this.libraryform = new FormGroup(
      {
        callno: new FormControl('', [Validators.required]),
        bname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        author: new FormControl('', [Validators.required, Validators.maxLength(10)]),
        publisher: new FormControl('', [Validators.required,Validators.maxLength(10)]),
        quantity: new FormControl('', [Validators.required]),
        
      });
  }

  addbook()
   {
         
         this.sc.addbook(this.libraryform.value).subscribe((d =>this.my(d)))

          
         }

  my(d) 
  {
    if (d.Msg=="successfully")
     {
      alert("successfully");
      this.r.navigate(['/admin/vwbk']);
    }
    else
     {
      alert("not successfully");
    }

}



}
