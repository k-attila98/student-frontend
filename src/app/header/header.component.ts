import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "StudentAPI frontend"
  loggedIn: boolean = false;

  constructor(private router: Router
     ) { }

  ngOnInit(): void 
  {
    this.router.events.subscribe(event =>
      {
        if(localStorage.getItem('session'))
          this.loggedIn = true;
        else
          this.loggedIn = false;
      });
  }
}
