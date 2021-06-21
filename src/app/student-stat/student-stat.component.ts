import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentWithGradeStats } from '../models/studentWithGradeStats';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-stat',
  templateUrl: './student-stat.component.html',
  styleUrls: ['./student-stat.component.scss']
})
export class StudentStatComponent implements OnInit {

  studentsWithStats: StudentWithGradeStats[];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void 
  {
    this.getStudentsWithStats();
  }

  getStudentsWithStats(): void
  {
    this.studentService.getStudentsWithStats().subscribe((students:any) => {
      this.studentsWithStats = students;
    },
    (error) =>
    {
      console.log(error);
      this.router.navigate(['/']);
    });
  }

}
