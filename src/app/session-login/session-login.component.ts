import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-login',
  templateUrl: './session-login.component.html',
  styleUrls: ['./session-login.component.scss']
})
export class SessionLoginComponent implements OnInit {

  form: FormGroup;
  loggedIn: boolean = false;

  constructor(private sessionService: SessionService, private router: Router, public fb: FormBuilder) 
  {
    this.form = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void 
  {
  }

  submitLogin()
  {
    if(!this.loggedIn)
    {
      this.sessionService.logInUser(this.form.value).subscribe(
        (response) => {
          console.log("Response: " + response);
          this.form.reset();
          this.loggedIn = true;
          localStorage.setItem('session', response)
          this.router.navigate(['/']);
        },
        (error) => {
          console.log("Error: " + error);
          this.form.reset();
          this.loggedIn = false;
          console.log(error);
        }
      );
    }
  }



}
