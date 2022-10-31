import { Medecin } from './../medecin';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { error } from '@angular/compiler/src/util';
import { DatabaseService } from '../services/database.service';
import { SecretaireService } from '../services/secretaire.service';
import { Secretaire } from '../secretaire';
import { LoginService } from '../services/login.service';
import { PatientService } from '../services/patient.service';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User() || null;
  message: String = "";
  x: String;
  a: number
  erreur: number = 0;

  constructor(private login: LoginService, private userService: UserService, private router: Router) { }

  ngOnInit(): void { }



  

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.login.SignIn(this.user);
    console.log("isValidUser " + isValidUser)
    console.log("user role " + this.user.role)
    if (isValidUser && this.user.role == "mp") {
      console.log("heyyyyyy" + this.user.email)
      this.router.navigate(['medecinPrincipal']);

    }
     if (isValidUser && this.user.role == "s") {
      console.log("heyyyyyy" + this.user.email)
      this.router.navigate(['secretaire']);

    }
    else if (isValidUser && this.user.role == "p") {
      console.log("heyyyyyy" + this.user.email)
      this.router.navigate(['patient']);

    }
    else if (isValidUser && this.user.role == "ms") {
      console.log("heyyyyyy" + this.user.email)
      this.router.navigate(['medecinSecondaire']);//hna tabdil

    }
    else {
      this.erreur = 1;
    }
  }


}

