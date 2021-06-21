import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-session-logout',
  templateUrl: './session-logout.component.html',
  styleUrls: ['./session-logout.component.scss']
})
export class SessionLogoutComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.submitLogout();
  }

  submitLogout()
  {
    this.sessionService.logOutUser();
    localStorage.removeItem('session');
    this.router.navigate(['/']);
  }

}
