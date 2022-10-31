import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medecin } from '../medecin';
import { DatabaseService } from '../services/database.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  public medecins:Medecin[] ;
  nom:any//pour search
 

  constructor(private userService : UserService,private dataBaseService:DatabaseService,private router:Router, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.getMedecins();
  }
  public getMedecins():void{
    this.dataBaseService.getListeMedecin().subscribe(data=>{
      this.medecins=data;
      console.log(this.medecins)
    });
  }
  updateMedecin(id:number){

    this.router.navigate(['../updateMedecin',id],{relativeTo:this.route});

  }

  deleteMedecin(id:number){
    let nomMedecin:string
    this.dataBaseService.getMedecinById(id).subscribe(data=>{
      nomMedecin=data.nom;
      if(window.confirm("Vous ètes sur de retirer "+nomMedecin)){
        this.dataBaseService.deleteMedecin(id).subscribe(data=>{
          this.getMedecins();
          this.userService.deleteUser(id).subscribe(data=>{
          })

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
      this.medecins = this.medecins.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }
  }

}
