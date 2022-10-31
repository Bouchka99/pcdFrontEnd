import { Secretaire } from './../secretaire';
import { SecretaireService } from './../services/secretaire.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modifier-secretaire',
  templateUrl: './modifier-secretaire.component.html',
  styleUrls: ['./modifier-secretaire.component.css']
})
export class ModifierSecretaireComponent implements OnInit {
  id:number;
  secretaire:Secretaire= new Secretaire();
  user:User = new User();
  constructor(private userService:UserService, private login : LoginService,private secretaireService:SecretaireService,private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.secretaireService.getSecretaireById(this.id).subscribe(data =>{
      this.secretaire=data;
    })
  }

  onSubmit(){
    this.secretaireService.updateSecretaire(this.id,this.secretaire).subscribe(data=>{
      if(this.login.isMedecinPrincipal()){
        this.user.password=this.secretaire.password;
        this.user.email=this.secretaire.email;
        this.user.role=this.secretaire.role;
        this.userService.updateUser(this.id,this.user).subscribe(data=>{
          this.router.navigate(['medecinPrincipal']);
        })
        
      }
      else{
        this.user.password=this.secretaire.password;
        this.user.email=this.secretaire.email;
        this.user.role=this.secretaire.role;
        this.userService.updateUser(this.id,this.user).subscribe(data=>{
          this.router.navigate(['secretaire']);
           })
    

      }
    
      
    })
  }

}
