import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rendezvous } from '../rendezvous';
import { RendezvousService } from '../services/rendezvous.service';

@Component({
  selector: 'app-consulterhistorique',
  templateUrl: './consulterhistorique.component.html',
  styleUrls: ['./consulterhistorique.component.css']
})
export class ConsulterhistoriqueComponent implements OnInit {

  public rendezvous:Rendezvous[];
  oui:string;
    constructor(private rendezvousservice:RendezvousService,private router:Router) { }
  
    ngOnInit(): void {
      this.getRendezvousarrivee();
    }
  
    public getRendezvousarrivee():void{
      this.rendezvousservice.getListeRendezvous().subscribe(data=>{
        this.rendezvous=data;
        console.log(this.rendezvous);
      })
  
    }
  

}
