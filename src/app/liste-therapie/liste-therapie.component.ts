import { TherapieService } from './../services/therapie.service';
import { Therapie } from './../therapie';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-therapie',
  templateUrl: './liste-therapie.component.html',
  styleUrls: ['./liste-therapie.component.css']
})
export class ListeTherapieComponent implements OnInit {

  public therapies:Therapie[] ;
  nom:any;

  constructor(private therapieService:TherapieService,private router:Router,private route : ActivatedRoute) {

   }

  ngOnInit(): void {
    this.getTherapies();
  }
  public getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }

  updateTherapie(id:number){

    this.router.navigate(['../updateTherapie',id],{relativeTo:this.route});
  }



  deleteTherapie(id:number){
    let nomTherapie:string
    this.therapieService.getTherapieById(id).subscribe(data=>{
      nomTherapie=data.nom;
      if(window.confirm("Vous ètes sur de retirer "+nomTherapie)){
        this.therapieService.deleteTherapie(id).subscribe(data=>{
          this.getTherapies();
        })
      }
    })

  }

  search(){
    if(this.nom=="")
    {
      this.ngOnInit();
    }
    else{
      this.therapies = this.therapies.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }
  }
  

}
