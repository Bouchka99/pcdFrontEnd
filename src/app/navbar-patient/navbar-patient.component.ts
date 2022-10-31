import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medecin } from '../medecin';
import { DatabaseService } from '../services/database.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar-patient',
  templateUrl: './navbar-patient.component.html',
  styleUrls: ['./navbar-patient.component.css']
})
export class NavbarPatientComponent implements OnInit {
  public medecins:Medecin[] ;

  constructor(private dataBaseService:DatabaseService,private router:Router,private login : LoginService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMedecins();
  }

  public getMedecins():void{
    this.dataBaseService.getListeMedecin().subscribe(data=>{
      this.medecins=data;
    });
  }

  public voirProfilMedecin(id:number){
    this.router.navigate(['./profilMedecin',id],{relativeTo:this.route});
  }

  logOut(){
    this.login.LogOut();
  }

}
