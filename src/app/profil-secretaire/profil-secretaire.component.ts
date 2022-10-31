import { SecretaireService } from './../services/secretaire.service';
import { Component, OnInit } from '@angular/core';
import { Secretaire } from '../secretaire';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-secretaire',
  templateUrl: './profil-secretaire.component.html',
  styleUrls: ['./profil-secretaire.component.css']
})
export class ProfilSecretaireComponent implements OnInit {
  secretaire:Secretaire= new Secretaire();
  id:number

  constructor(private secretaireService:SecretaireService , private route:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.secretaireService.getSecretaireById(this.id).subscribe(data =>{
      this.secretaire=data;
    })
  }
  contacter(){
    this.router.navigate(['../../envoyerMail'],{relativeTo:this.route});
  }
  

}
