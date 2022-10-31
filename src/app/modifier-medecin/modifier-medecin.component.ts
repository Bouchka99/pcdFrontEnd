import { UserService } from './../services/user.service';
import { DatabaseService } from './../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from '../medecin';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-modifier-medecin',
  templateUrl: './modifier-medecin.component.html',
  styleUrls: ['./modifier-medecin.component.css']
})
export class ModifierMedecinComponent implements OnInit {
  id:number;
  medecin:Medecin= new Medecin();
  user:User = new User()
  

  constructor(private userService:UserService, public login:LoginService,private databaseService : DatabaseService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.databaseService.getMedecinById(this.id).subscribe(data =>{
      this.medecin=data;
    })
  }

  onSubmit(){
    this.databaseService.updateMedecin(this.id,this.medecin).subscribe(data=>{
      if(this.login.isMedecinPrincipal()){

         this.user.password=this.medecin.password;
          this.user.email=this.medecin.email;
          this.user.role=this.medecin.role;
          this.userService.updateUser(this.id,this.user).subscribe(data=>{
            this.router.navigate(['medecinPrincipal']);
          })
      }
      else{
        this.user.password=this.medecin.password;
        this.user.email=this.medecin.email;
        this.user.role=this.medecin.role;
        this.userService.updateUser(this.id,this.user).subscribe(data=>{
          this.router.navigate(['medecinSecondaire']);
        })
      }

      
    })
  }
 

}
