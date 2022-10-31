import { ActivatedRoute, Router } from '@angular/router';
import { TherapieService } from './../services/therapie.service';
import { Therapie } from './../therapie';
import { SecretaireService } from './../services/secretaire.service';
import { Component, OnInit } from '@angular/core';
import { Secretaire } from '../secretaire';
import { DatabaseService } from '../services/database.service';
import { Medecin } from './../medecin';
import { LoginService } from '../services/login.service';
//import { relative } from 'path';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public medecins:Medecin[] ;
  public secretaires:Secretaire[];
  public therapies:Therapie[];

  constructor(private dataBaseService:DatabaseService,private secretaireService:SecretaireService,
    private therapieService:TherapieService,private router:Router,public login:LoginService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getMedecins();
    this.getSecretaires();
    this.getTherapies();
    //this.voirHome();
    
  }
  public getMedecins():void{
    this.dataBaseService.getListeMedecin().subscribe(data=>{
      this.medecins=data;
    });
  }

  public getSecretaires():void{
    this.secretaireService.getListeSecretaire().subscribe(data=>{
      this.secretaires=data;
    });
  }
  public getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  // voirHome(){
  //   this.router.navigate(['/']);
  // }

  voirProfilMedecin(id:number){
    this.router.navigate(['profilMedecin',id],{relativeTo:this.route});
    //this.router.navigateByUrl(`./profilMedecin/${id}`);
  }

  voirProfilSecretaire(id:number){
    this.router.navigate(['./profilSecretaire',id],{relativeTo:this.route});
  }
  voirProfilTherapie(id:number){
    this.router.navigate(['./profilTherapie',id],{relativeTo:this.route});
  }

  logOut(){
    this.login.LogOut();
  }


  //pour le formulaire
}
