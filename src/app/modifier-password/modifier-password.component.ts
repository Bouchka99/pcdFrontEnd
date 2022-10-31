import { UserService } from './../services/user.service';
import { Patient } from './../patient';
import { Secretaire } from './../secretaire';
import { PatientService } from './../services/patient.service';
import { SecretaireService } from './../services/secretaire.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../medecin';
import { DatabaseService } from '../services/database.service';
import { LoginService } from '../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent implements OnInit {

  id:number;
  medecin:Medecin= new Medecin();
  secretaire:Secretaire = new Secretaire();
  patient: Patient = new Patient();
  user:User = new User();
  verifEmail:string;
  ancien:string;//ancien mot de passe
  nouveau:string;
  

  constructor(private userService : UserService,public login:LoginService,private secretaireService :SecretaireService, private servicePatient:PatientService , private databaseService : DatabaseService,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    if(this.login.isMedecin()){
      this.id=this.route.snapshot.params['id'];
      this.databaseService.getMedecinById(this.id).subscribe(data =>{
        this.medecin=data;
      })
    }
    else if (this.login.isSecretaire()){
      this.id=this.route.snapshot.params['id'];
      this.secretaireService.getSecretaireById(this.id).subscribe(data =>{
        this.secretaire=data;
      })
    }
    else {
      this.id=this.route.snapshot.params['id'];
      this.servicePatient.getPatientById(this.id).subscribe(data =>{
        this.patient=data;
      })
    }
    
  }

  onSubmit(){

      if(this.login.isMedecinPrincipal() && this.medecin.password ==this.ancien){
        this.medecin.password=this.nouveau;
        this.databaseService.updateMedecin(this.id,this.medecin).subscribe(data=>{   
          this.user.password=this.nouveau;
          this.user.email=this.medecin.email;
          this.user.role=this.medecin.role;
          this.userService.updateUser(this.id,this.user).subscribe(data=>{
            this.router.navigate(['medecinPrincipal']);
          })

         })
       
      }
      else if(this.login.isMedecinSecondaire() &&  this.medecin.password == this.ancien){
        this.medecin.password=this.nouveau;
        this.databaseService.updateMedecin(this.id,this.medecin).subscribe(data=>{  
          this.user.password=this.nouveau;
          this.user.email=this.medecin.email;
          this.user.role=this.medecin.role;
          this.userService.updateUser(this.id,this.user).subscribe(data=>{
            this.router.navigate(['medecinSecondaire']);
          })

         })
     
      }
      else if(this.login.isSecretaire() && this.secretaire.password == this.ancien){
        this.secretaire.password=this.nouveau;
        this.secretaireService.updateSecretaire(this.id,this.secretaire).subscribe(data=>{
          this.user.password=this.nouveau;
          this.user.email=this.secretaire.email;
          this.user.role=this.secretaire.role;
          // this.userService.findUserByEmail(this.secretaire.email).subscribe(data=>{
          //   this.user= data;
            
          // })
          // this.userService.getUserById(this.secretaire.id).subscribe(data=>{
          //   this.user=data
          // })
          this.userService.updateUser(this.id,this.user).subscribe(data=>{
            this.router.navigate(['secretaire']);
          })
 
         })

      }
      else if(this.login.isPatient() && this.patient.password == this.ancien){
        this.patient.password=this.nouveau;
        this.servicePatient.updatePatient(this.id,this.patient).subscribe(data=>{
          this.user.password=this.nouveau;
          this.user.email=this.patient.email;
          this.user.role=this.patient.role;
          this.userService.updateUser(this.id,this.user).subscribe(data=>{
            this.router.navigate(['patient']);          })
          
         })

      }
      else{
        window.confirm("Vérifier votre ancien mot de passe !")
      }

      

  }

}
