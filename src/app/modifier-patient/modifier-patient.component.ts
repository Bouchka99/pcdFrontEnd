import { User } from './../user';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})
export class ModifierPatientComponent implements OnInit {

  id:number;
  patient:Patient= new Patient();
  user : User = new User()
  

  constructor(private userService:UserService, private patientService : PatientService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data =>{
      this.patient=data;
    })
  }

  onSubmit(){
    this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{
      this.user.password=this.patient.password;
      this.user.email=this.patient.email;
      this.user.role=this.patient.role;
      this.userService.updateUser(this.id,this.user).subscribe(data=>{
        this.router.navigate(['patient']);         })
  
      
    })
  }

}
