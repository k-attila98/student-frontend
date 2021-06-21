import { Component, OnInit } from '@angular/core';
import { StudentBasic } from '../models/studentBasic';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit 
{

  students: StudentBasic[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void 
  {
    this.getStudents();
  }

  getStudents(): void
  {
    this.studentService.getStudents().subscribe((students:any) => {
      this.students = students;
    });
  }

}
