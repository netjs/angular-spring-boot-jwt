import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  //isLoggedIn = false;
  userName: string = '';
  ngOnInit(): void {
    //this.isLoggedIn = this.authService.isLoggedIn();
  }
  getUserName(){
     return sessionStorage.getItem("username");
  }
  onLogOut(){
    this.authService.logout();
  }

  loggedIn(){
    return this.authService.isLoggedIn()
  }
}
