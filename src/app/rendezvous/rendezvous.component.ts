import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rendezvous } from '../rendezvous';
import { RendezvousService } from '../services/rendezvous.service';
import { TherapieService } from '../services/therapie.service';
import { Therapie } from '../therapie';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {
  t1:any
  t2:any
  t3:any
  d1:any
  d2:any
  d3:any
  nom:any
  prenom:any
  age:any
  email:any
  telephone:any
  description:any
  selectTherapie:any
  public therapies:Therapie[] ;


  getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }
  

  ngOnInit(): void {
    this.getTherapies();
    //this.selectTherapie="Hijema Diniya"
  }


  rendezvous:Rendezvous = new Rendezvous()
  

  
  constructor(private therapieService:TherapieService,private rendezvousservice:RendezvousService,private router:Router) { }


  onSubmit(){
   this.rendezvousservice.createRendezvous(this.rendezvous).subscribe(data=>{
    console.log(data);
    this.router.navigate(['patient']);

  })
  }


}
