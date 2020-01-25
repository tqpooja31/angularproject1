import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddlibrarianComponent } from './addlibrarian/addlibrarian.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewlibrarianComponent } from './viewlibrarian/viewlibrarian.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdatelibrarianComponent } from './updatelibrarian/updatelibrarian.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ViewIssueBookComponent } from './view-issue-book/view-issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { HomeComponent } from './home/home.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ContactusComponent } from './contactus/contactus.component';

const approutes: Routes = [
   {path :'ho',component:HomeComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'home', component: AddlibrarianComponent },
      { path: 'view', component: ViewlibrarianComponent },
       { path: 'stud', component: AddstudentComponent },
       { path: 'vwst', component: ViewstudentComponent },
        { path: 'adbk', component: AddBookComponent},
      { path: 'vwbk', component: ViewBookComponent },
      { path: 'isbk', component: IssueBookComponent },
      { path: 'vwisbk', component: ViewIssueBookComponent },
      { path: 'rebk', component: ReturnBookComponent }]
  },
  {
    path: 'librarian', component: LibrarianComponent,
    children: [
      { path: 'adbk', component: AddBookComponent},
      { path: 'vwbk', component: ViewBookComponent },
      { path: 'stud', component: AddstudentComponent },
      { path: 'vwst', component: ViewstudentComponent },
      { path: 'isbk', component: IssueBookComponent },
      { path: 'vwisbk', component: ViewIssueBookComponent },
      { path: 'rebk', component: ReturnBookComponent }]
  },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'edit/:i', component: EditbookComponent },
  { path: 'update/:i', component: UpdatelibrarianComponent },
  { path: 'estud/:i', component: UpdatestudentComponent },
  { path: '', redirectTo: '/ho', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    LoginComponent,
    AddlibrarianComponent,
    ViewlibrarianComponent,
    PagenotfoundComponent,
    UpdatelibrarianComponent,
    AdminComponent,
    AboutUsComponent,
    LibrarianComponent,
    AddBookComponent,
    ViewBookComponent,
    IssueBookComponent,
    ViewIssueBookComponent,
    ReturnBookComponent,
    HomeComponent,
    EditbookComponent,
    AddstudentComponent,
    ViewstudentComponent,
    UpdatestudentComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(approutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } HttpClientModule
