import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {



  registerForm:FormGroup;  
  constructor(public r:Router) { }
   ngOnInit()
  
   {
     this.registerForm=new FormGroup(
     {
       
 name:new FormControl('',[Validators.required,Validators.minLength(3)]),

 mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),  
  
    pass:new FormControl('',[Validators.required,Validators.minLength(5)]),

    confirmpass:new FormControl('',[Validators.required,Validators.minLength(5)]),
     
    gender:new FormControl(),
    
    mobile: new FormControl('',[Validators.required]),
   
   });
  
  }
  
  go()
  {

  this.r.navigate(['login']);
 }
msg;
    
onSubmit()
    {
 
    console.log(this.registerForm.value);
    
 // this.d.savedata(this.registerForm.value).subscribe((d=>this.msg=d));
 
  }
 
 

}
