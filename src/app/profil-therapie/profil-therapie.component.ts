import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TherapieService } from '../services/therapie.service';
import { Therapie } from '../therapie';

@Component({
  selector: 'app-profil-therapie',
  templateUrl: './profil-therapie.component.html',
  styleUrls: ['./profil-therapie.component.css']
})
export class ProfilTherapieComponent implements OnInit {
  therapie :Therapie = new Therapie();
  id:number

  constructor(private therapieService:TherapieService , private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })
  }

  // updateTherapie(id:number){
  //   //this.router.navigate(['updateTherapie',id]);
  //   this.router.navigate(['../updateTherapie',id],{relativeTo:this.route});
  // }
  updateTherapie(id:number){

    this.router.navigate(['../../updateTherapie',id],{relativeTo:this.route});
  }


}
