import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar0',
  templateUrl: './navbar0.component.html',
  styleUrls: ['./navbar0.component.css']
})
export class Navbar0Component implements OnInit {

  constructor(private router:Router,public login : LoginService) { }

  ngOnInit(): void {
    //this.voirHome();
  }
  /*voirHome(){
    this.router.navigate(['/navbar']);
  }*/

}
