import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Grade } from '../models/grade';
import { StudentBasic } from '../models/studentBasic';
import { GradeService } from '../services/grade.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-grade-add',
  templateUrl: './grade-add.component.html',
  styleUrls: ['./grade-add.component.scss']
})
export class GradeAddComponent implements OnInit {

  addedGrade: Grade;
  students: StudentBasic[];
  form: FormGroup;

  constructor(private route: ActivatedRoute, private studentService:  StudentService, private gradeService: GradeService ,public fb: FormBuilder) 
  {
    this.form = this.fb.group({
      grade: 5,
      studentId: 0
    });
  }

  ngOnInit(): void 
  {
    this.getStudents();
  }

  getStudents()
  {
    this.studentService.getStudents().subscribe((students: any) => {
      this.students = students;

      this.form = this.fb.group({
        grade: 5,
        studentId: this.students[0].id
      });
    });
  }


  submitForm()
  {
    this.gradeService.addNewGradeForStudent(this.form.value).subscribe(
      (response) => {
        this.addedGrade = response as Grade;
      },
      (error) => console.log(error)
    );
  }

}
