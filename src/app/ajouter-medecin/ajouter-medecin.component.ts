import { User } from '../user';
import { Router } from '@angular/router';
import { DatabaseService } from './../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from '../medecin';
import { UserService } from '../services/user.service';




@Component({
  selector: 'app-ajouter-medecin',
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.css']
})
export class AjouterMedecinComponent implements OnInit {
  medecin: Medecin = new Medecin();
  user: User = new User();
  //private dataService:DatabaseService =>pour utiliser la methode post du service 
  constructor(private userService: UserService, private dataService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  saveMedecin() {
    console.log("heyyyyyy")
    this.medecin.role = "ms";//medecinSEcondaire
    this.user.role = "ms";
    //console.log(this.user.password)
    this.dataService.createMedecin(this.medecin).subscribe(data => {
      this.user.email=data.email;
      this.user.password=data.password;
      this.user.role = "ms";
      console.log(data);
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data);
        this.router.navigate(['medecinPrincipal']);
      })
 
    }) 


  }
  onSubmit() {
    this.saveMedecin();
  }

}
