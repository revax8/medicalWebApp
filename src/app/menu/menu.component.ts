import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'med-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  isLoggedIn = false;

  constructor(private router : Router,private _authService: AuthService){
    this._authService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }
  ngOnInit(): void {
    // this.router.navigate(["init"]);
    this._authService.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }
  login() {
    this._authService.login();
    this.router.navigate(["init"]);
  }

  logout() {
    this._authService.logout();
  }

}
