import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentBasic } from '../models/studentBasic';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  form: FormGroup;
  addedStudent: StudentBasic;
  
  constructor(private studentService: StudentService, public fb: FormBuilder) 
  {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required), //[''],
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{4}")]),
      born: new FormControl('', [Validators.required, Validators.pattern("[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])")]),
      year: new FormControl('', [Validators.required, Validators.min(0), Validators.max(99), Validators.pattern('[0-9]*')]),
    });
  }

  ngOnInit(): void { }

  submitForm()
  { 
    this.studentService.createNewStudent(this.form.value).subscribe(
      (response) => {
        this.addedStudent = response as StudentBasic;

        this.form.reset();
      },
      (error) => {
        this.form.reset();
        console.log(error)
      }
    );
  }

  get name() { return this.form.get('name'); }
  get phoneNumber() { return this.form.get('phoneNumber'); }
  get born() { return this.form.get('born'); }
  get year() { return this.form.get('year'); }
}
