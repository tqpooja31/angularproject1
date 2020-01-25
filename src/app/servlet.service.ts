import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServletService {

  constructor(public hc:HttpClient) {}

  Adddata(value)
  {
    
    return this.hc.post("http://localhost:8080/LibraryProj/AddLibrarianServlet",value);
   
  }

  Viewdata()
  {
    return this.hc.get("http://localhost:8080/LibraryProj/ViewLibrarianServlet");
  }

  deletedata(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/DeleteServlet",x);
  }

  updatedata(x)
  {
    
    return this.hc.post("http://localhost:8080/LibraryProj/UpdatelibrarianServlet",x);
  }

  chklogin(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/LoginServlet",x);
  }

  addbook(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/AddbookServlet",x);
  }

  viewbook()
  {
    return this.hc.get("http://localhost:8080/LibraryProj/ViewBookServlet");
  }

  updatebook(x)
  {
    
    return this.hc.post("http://localhost:8080/LibraryProj/EditBookServlet",x);
  }

  deletebook(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/DeleteBookServlet",x);
  }

  addissuebook(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/AddIssueBookServlet",x)
  }

  viewIssuebook()
  {
    return this.hc.get("http://localhost:8080/LibraryProj/ViewIssueBookServlet");
  }

  returnbook(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/ReturnBook",x);
  }
  

  addstudent(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/AddStudentServlet",x)
  }

  viewStudent()
  {
    return this.hc.get("http://localhost:8080/LibraryProj/ViewStudentServlet");
  }

  deletestudent(x)
  {
    return this.hc.post("http://localhost:8080/LibraryProj/DeleteStudentServlet",x);
  }

  updatestudent(x)
  {
    
    return this.hc.post("http://localhost:8080/LibraryProj/EditStudetServlet",x);
  }
  }

