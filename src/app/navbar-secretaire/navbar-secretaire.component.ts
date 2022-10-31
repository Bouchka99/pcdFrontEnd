import { Component, OnInit } from '@angular/core';
import { Rendezvous } from '../rendezvous';
import { LoginService } from '../services/login.service';
import { RendezvousService } from '../services/rendezvous.service';

@Component({
  selector: 'app-navbar-secretaire',
  templateUrl: './navbar-secretaire.component.html',
  styleUrls: ['./navbar-secretaire.component.css']
})
export class NavbarSecretaireComponent implements OnInit {

  public rendezvous:Rendezvous[] ;

  constructor(private rendezvousservice:RendezvousService, public login : LoginService) { }

  ngOnInit(): void {
    this.getRendezvous();
  }

  public getRendezvous():void{
    this.rendezvousservice.getListeRendezvous().subscribe(data=>{
      this.rendezvous=data;
    });
  }
  logOut(){
    this.login.LogOut();
  }
}
