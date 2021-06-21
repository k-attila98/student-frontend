import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private gradesBaseUrl = "http://localhost:5000/api/grades/";

  constructor(private http: HttpClient) { }

  addNewGradeForStudent(formValues)
  {
    return this.http.post(this.gradesBaseUrl, formValues, { withCredentials: true });
  }


}
