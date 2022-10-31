import { Router } from '@angular/router';
import { Secretaire } from './../secretaire';
import { SecretaireService } from './../services/secretaire.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajouter-secretaire',
  templateUrl: './ajouter-secretaire.component.html',
  styleUrls: ['./ajouter-secretaire.component.css']
})
export class AjouterSecretaireComponent implements OnInit {
   secretaire:Secretaire = new Secretaire();
   user :User = new User();

  constructor(private userService:UserService,private secretaireService:SecretaireService,private router:Router) { }

  ngOnInit(): void {
  }
  saveSecretaire(){
    this.secretaire.role="s";//secretaire
  

    //console.log(this.user.password)
    this.secretaireService.createSecretaire(this.secretaire).subscribe(data => {
      this.user.email=data.email;
      this.user.password=data.password;
      this.user.role = "s";
      console.log(data);
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data);
        this.router.navigate(['medecinPrincipal']);

      })
 
    }) 
  }
  onSubmit(){
    this.saveSecretaire();
  }

}
