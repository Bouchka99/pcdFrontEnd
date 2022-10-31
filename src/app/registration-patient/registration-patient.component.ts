import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../services/patient.service';
import { UserService } from '../services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-registration-patient',
  templateUrl: './registration-patient.component.html',
  styleUrls: ['./registration-patient.component.css']
})
export class RegistrationPatientComponent implements OnInit {
  message:String="";
  patient:Patient=new Patient();
  user:User = new User();
  constructor(private userService:UserService,private patientService:PatientService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.patient.role="p";//patient
    
    //console.log(this.user.password)
    this.patientService.createPatient(this.patient).subscribe(data => {
      this.user.email=data.email;
      this.user.password=data.password;
      this.user.role = "p";
      console.log(data);
      this.userService.createUser(this.user).subscribe(data => {
        console.log(data);
        this.router.navigate(['']);
      })
 
    }, error =>{
      this.message="Email déja utilisé";
        }) 
  }
 

}