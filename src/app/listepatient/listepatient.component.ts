import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rendezvous } from '../rendezvous';
import { RendezvousService } from '../services/rendezvous.service';

@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.css']
})
export class ListepatientComponent implements OnInit {

  public rendezvous:Rendezvous[] ;

  constructor(private rendezvousservice:RendezvousService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRendezvous();
  }

  public getRendezvous():void{
    this.rendezvousservice.getListeRendezvous().subscribe(data=>{
      this.rendezvous=data;
    });
  }
  updateRendezvous(id:number){
    this.router.navigate(['../updateRendezvous',id],{relativeTo:this.route});
    }


 
  deleteRendezvous(id:number){
    if(window.confirm("Vous ètes sur de supprimer le rendez-vous ?")){
      this.rendezvousservice.deleteRendezvous(id).subscribe(data=>{
        this.getRendezvous();
      })
    }

  }

}
