import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { TherapieService } from '../services/therapie.service';
import { Therapie } from '../therapie';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {



  public therapies: Therapie[];//liste de thérapies
  therapieNom: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  nom: any;
  imageName: any
  stop: Boolean
  therapie: Therapie = new Therapie();
  id: number;
  constructor(private login: LoginService, private therapieService: TherapieService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTherapies();
    /*this.route.params.subscribe(params=>{
      if(params.searchTerm)
      this.therapies=this.therapieService.getListeTherapie().filter(therapie=>therapie.nom.toLowerCase().includes(params.searchItem.toLowerCase()))
    })*/
  }

  get(a: { value: any; }) {
    console.log(a.value);
  }

  public getTherapies(): void {
    this.therapieService.getListeTherapie().subscribe(data => {
      this.therapies = data;
    });
  }


  afficher(y: any, x: any) {
    //y => id de la thérapie 
    console.log(y + " " + x);
    this.therapieService.getTherapieById(y).subscribe(data => {
      this.therapie = data;
      this.therapie.starRating = x;


      this.therapieService.updateTherapieRate(y, this.therapie).subscribe(data => {
        //this.router.navigate(['']);

      })
    })


  }

  /*viewprofil(id : number ){
    this.login.credentials.next(id);   
  }*/
  viewprofil(id: number) {
    this.router.navigate(['./therapieHome', id], { relativeTo: this.route });
  }



}
