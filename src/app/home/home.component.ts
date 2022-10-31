import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TherapieService } from '../services/therapie.service';
import { Therapie } from '../therapie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //déclaration d'une variable que nous ne pouvons pas l'affiché  que dans home.html
  //firstname='mahdiiiiii';
  //imgA="assets/images/téléchargement.jpg";
  //pour tester *ngIf
  //verif=false; 
  //pour tester *ifFor par exemple on a des users dans la base de données et on veut les afficher dans un tableau
  //tab=['tunisia','algerie','libye','egypte'];
  //pour tester *ngSwitch
  //n=2
  //pour tester style dans .html
  //dis="fixed";
  //col="red"
  //d:number =Date.now();

  public therapies : Therapie[];//liste de thérapies
  therapieNom:any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  nom:any;
  imageName:any
  stop:Boolean

  therapie :Therapie = new Therapie();
  constructor(private therapieService:TherapieService,private router:Router, private httpClient: HttpClient,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getTherapies();
    /*this.route.params.subscribe(params=>{
      if(params.searchTerm)
      this.therapies=this.therapieService.getListeTherapie().filter(therapie=>therapie.nom.toLowerCase().includes(params.searchItem.toLowerCase()))
    })*/
  }

  get(a: { value: any; }){
    console.log(a.value);
  }

  public getTherapies():void{
    this.therapieService.getListeTherapie().subscribe(data=>{
      this.therapies=data;
    });
  }


  afficher(y: any, x: any) {
    //y => id de la thérapie 
    console.log(y + " " + x);
    this.therapieService.getTherapieById(y).subscribe(data => {
      this.therapie = data;
      this.therapie.starRating = x;

    })


  }
  viewprofil(id: number) {
    this.router.navigate(['../therapieHome', id], { relativeTo: this.route });
  }

    

 

}
