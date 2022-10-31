import { PatientService } from './../services/patient.service';
import { SecretaireService } from './../services/secretaire.service';
import { LoginService } from './../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from './../services/database.service';
import { Medecin } from './../medecin';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from '../patient';
import { Secretaire } from '../secretaire';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {
  medecinId: number;
  patientId: number;
  secretaireId: number;
  private sub: Subscription
  medecin: Medecin;
  patient: Patient;
  secretaire: Secretaire;


  constructor(private router : Router,private userService:UserService,public login: LoginService, private serviceSecretaire: SecretaireService, private servicePatient: PatientService, private dataBaseService: DatabaseService, private activatedRoute: ActivatedRoute) 
  {  }

  ngOnInit(): void {
    console.log(this.login.loggedUser+" est connecté");
    if(this.login.roles=="mp" || this.login.roles=="ms"){
      console.log("login roles "+this.login.roles)
      this.getMedecin();
    }
    else if(this.login.roles=="s"){
      console.log("login roles "+this.login.roles)
      this.getSecretaire();
    }
    else if(this.login.roles=="p"){
      console.log("login roles "+this.login.roles)
      this.getPatient();
    }

  }

  getPatient(){
    this.servicePatient.findPatientByEmail(this.login.loggedUser).pipe(
      map((patient: Patient) => this.patient = patient)
    ).subscribe()
  }

  getSecretaire(){
    this.serviceSecretaire.findSecretaireByEmail(this.login.loggedUser).pipe(
      map((secretaire: Secretaire) => this.secretaire = secretaire)
    ).subscribe()
  }

  getMedecin(){
    this.dataBaseService.findMedecinByEmail(this.login.loggedUser).pipe(
      map((medecin: Medecin) => this.medecin = medecin)
    ).subscribe()
  }

  modifierMedecin(id:number){
    this.router.navigate(['../modifierMedecin',id],{relativeTo:this.activatedRoute});
  }

  modifierSecretaire(id:number){
    this.router.navigate(['../modifierSecretaire',id],{relativeTo:this.activatedRoute});
  }

  modifierPatient(id:number){
    this.router.navigate(['../modifierPatient',id],{relativeTo:this.activatedRoute});
  }

  
  modifierPasswordPatient(id : number){
    this.router.navigate(['../modifierPassword',id],{relativeTo:this.activatedRoute});
  }
  modifierPasswordSecretaire(id : number){
    this.router.navigate(['../modifierPassword',id],{relativeTo:this.activatedRoute});
  }

  modifierPasswordMedecin(id : number){
    this.router.navigate(['../modifierPassword',id],{relativeTo:this.activatedRoute});
  }








}
