import { SecretaireService } from './../services/secretaire.service';
import { Secretaire } from './../secretaire';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-liste-secretaire',
  templateUrl: './liste-secretaire.component.html',
  styleUrls: ['./liste-secretaire.component.css']
})
export class ListeSecretaireComponent implements OnInit {

  public secretaires:Secretaire[] ;
  nom:any

  constructor(private userService:UserService,private secretaireService:SecretaireService,private router:Router,private route : ActivatedRoute) {

   }

  ngOnInit(): void {
    this.getSecretaires();
  }
  public getSecretaires():void{
    this.secretaireService.getListeSecretaire().subscribe(data=>{
      this.secretaires=data;
    });
  }

  updateSecretaire(id:number){
    this.router.navigate(['../updateSecretaire',id],{relativeTo:this.route});
  }



  deleteSecretaire(id:number){
    let nomSecretaire:string
    this.secretaireService.getSecretaireById(id).subscribe(data=>{
      nomSecretaire=data.nom;
      if(window.confirm("Vous ètes sur de retirer "+nomSecretaire)){
        this.secretaireService.deleteSecretaire(id).subscribe(data=>{
          this.getSecretaires();
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
      this.secretaires = this.secretaires.filter(res=>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }
  }

}
