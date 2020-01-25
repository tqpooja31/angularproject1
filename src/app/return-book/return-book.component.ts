import { Component, OnInit } from '@angular/core';
import { ServletService } from '../servlet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  constructor(public sc:ServletService,public r:Router ) { }
  
  temp:any[]=[" "];

  res:any[]=[];

  ngOnInit() { }

  down(y)
  {
    this.sc.viewIssuebook().subscribe((t:any)=>
    {
      this.res=t;
      for(let i=0;i<this.res.length;i++)
      {
        if(y==this.res[i].studid && this.res[i].returnstatus=='no')
        {
             this.temp.push(this.res[i].callno);
        }
      }
    });
  }

  p;
  sel(r)
  {
    this.p=r;
  }

  Returnbook(x)
  {
     x.callno=this.p;
     console.log(x);
     this.sc.returnbook(x).subscribe(()=>{
       this.r.navigate(['/admin/vwisbk']);
     });
  }

}
