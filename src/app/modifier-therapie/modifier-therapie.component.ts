import { ActivatedRoute, Router } from '@angular/router';
import { TherapieService } from './../services/therapie.service';
import { Component, OnInit } from '@angular/core';
import { Therapie } from '../therapie';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-modifier-therapie',
  templateUrl: './modifier-therapie.component.html',
  styleUrls: ['./modifier-therapie.component.css']
})
export class ModifierTherapieComponent implements OnInit {
  therapie:Therapie = new Therapie();
  id:number;
  // imageTherapie et imgURL  pour l'image de la thérapie
  imageTherapie:any;
  imgURL:any
  public imagPath:any;
  constructor(private login:LoginService,private therapieService:TherapieService,private route :ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.therapieService.getTherapieById(this.id).subscribe(data =>{
      this.therapie=data;
    })
  }

  onSubmit(){
    this.therapieService.updateTherapie(this.id,this.therapie).subscribe(data=>{
      if(this.login.isMedecinPrincipal()){
        this.router.navigate(['medecinPrincipal']);
      }
      else if(this.login.isMedecinSecondaire()){
        this.router.navigate(['medecinSecondaire']);
      }
      else if(this.login.isSecretaire()){
        this.router.navigate(['secretaire']);
      }
      else {
        this.router.navigate(['patient']);
      }
      
      
    })
  }


  onSelectFile(event:any){
    //si on a importé une image
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.imageTherapie=file;
      var imgType=event.target.files[0].type;
      var reader = new FileReader();
      this.imagPath=file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL=reader.result;
      }
    }

  }

}
