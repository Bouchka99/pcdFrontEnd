import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../medecin';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-profil-medecin',
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css']
})
export class ProfilMedecinComponent implements OnInit {
  id:number;
  medecin:Medecin= new Medecin();

  constructor(private databaseService : DatabaseService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.databaseService.getMedecinById(this.id).subscribe(data =>{
      this.medecin=data;
    })
  }

  contacter(){
    this.router.navigate(['../../envoyerMail'],{relativeTo:this.route});
  }

}
