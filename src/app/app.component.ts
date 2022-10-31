import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'version1';
  constructor(private login:LoginService,private router: Router) { }

  ngOnInit(): void {
    let isLoggedIn : any;
    let loggedUser : any;

    isLoggedIn = localStorage.getItem('isLoggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if(isLoggedIn != "true" || !loggedUser){
      //this.router.navigate(['navbar0']);
    }
    else{
      //this.login.setLoggedUserFromLocalStorage(loggedUser);
    }

    
  }
 



}