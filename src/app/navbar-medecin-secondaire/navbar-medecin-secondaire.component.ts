import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar-medecin-secondaire',
  templateUrl: './navbar-medecin-secondaire.component.html',
  styleUrls: ['./navbar-medecin-secondaire.component.css']
})
export class NavbarMedecinSecondaireComponent implements OnInit {

  constructor(private login : LoginService,private router:Router) { }

  ngOnInit(): void {
    //this.voirHome();
  }

  // voirHome(){
  //   this.router.navigate(['/navbar']);
  // }

  logOut(){
    this.login.LogOut();
  }

}
