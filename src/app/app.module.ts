import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeaderComponent } from './header/header.component';
import { StudentStatComponent } from './student-stat/student-stat.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentService } from './services/student.service';
import { GradeAddComponent } from './grade-add/grade-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionLoginComponent } from './session-login/session-login.component';
import { GradeService } from './services/grade.service';
import { SessionService } from './services/session.service';
import { SessionLogoutComponent } from './session-logout/session-logout.component';
import { CookieService } from 'ngx-cookie-service';


const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'students/stats', component: StudentStatComponent },
  { path: 'student/add', component: StudentAddComponent },
  { path: 'grade/add', component: GradeAddComponent },
  { path: 'login', component: SessionLoginComponent },
  { path: 'logout', component: SessionLogoutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentListComponent,
    StudentStatComponent,
    StudentAddComponent,
    GradeAddComponent,
    SessionLoginComponent,
    SessionLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [ 
    StudentService,
    GradeService,
    SessionService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
