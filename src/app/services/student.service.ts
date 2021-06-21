import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentBasic } from '../models/studentBasic';
import { HttpClient } from '@angular/common/http';
import { StudentWithGradeStats } from '../models/studentWithGradeStats';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentBaseUrl = 'http://localhost:5000/api/students/';
  private createStudentUrl = "http://localhost:5000/api/students/";

  constructor( private http: HttpClient ) { }

  getStudents(): Observable<StudentBasic[]>
  {
    return this.http.get<StudentBasic[]>(this.studentBaseUrl);
  }

  getStudent(id: number): Observable<StudentBasic>
  {
    let studentUrl = `${this.studentBaseUrl}${id}`
    return this.http.get<StudentBasic>(studentUrl);
  }

  getStudentsWithStats(): Observable<StudentWithGradeStats[]>
  {
    let url = `${this.studentBaseUrl}withgradestats`
    return this.http.get<StudentWithGradeStats[]>(url);
  }

  createNewStudent(formValues)
  {
    return this.http.post(this.studentBaseUrl, formValues, { withCredentials: true });
  }
}
