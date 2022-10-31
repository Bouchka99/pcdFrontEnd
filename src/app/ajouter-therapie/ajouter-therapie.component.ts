import { Router } from '@angular/router';
import { TherapieService } from './../services/therapie.service';
import { Therapie } from './../therapie';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-therapie',
  templateUrl: './ajouter-therapie.component.html',
  styleUrls: ['./ajouter-therapie.component.css']
})
export class AjouterTherapieComponent implements OnInit {
  therapie: Therapie = new Therapie();
  // imageTherapie et imgURL  pour l'image de la thérapie
  imageTherapie: any;
  imgURL: any
  public imagPath: any;
  file: File;
  message: string;
  constructor(private therapieService: TherapieService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  /*saveTherapie() {
    this.therapieService.createTherapie(this.therapie).subscribe(data => {
      console.log(data);
      this.router.navigate(['']);

    })
  }*/
  onSubmit() {
    console.log(this.file);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.file, this.file.name);
    const nomTherapie = this.therapie.nom;
    const description = this.therapie.description;
    const video =this.therapie.video;
    uploadImageData.append('nomTherapie', nomTherapie);
    uploadImageData.append('description', description);
    uploadImageData.append('video', video);
    


    this.httpClient.post('http://localhost:8080/therapie/upload', uploadImageData
      , { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
        this.router.navigate(['medecinPrincipal']);

      }
      );
      

  }



  onSelectFile(event: any) {
    //si on a importé une image
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.imageTherapie = this.file;

      var imgType = event.target.files[0].type;
        
      var reader = new FileReader();
      this.imagPath = this.file;
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }
  }

  /*addData(){
    const formData = new FormData();
    const therapie = this.
  }*/
}


/*
export class AjouterTherapieComponent implements OnInit {
therapie:Therapie = new Therapie();
// imageTherapie et imgURL  pour l'image de la thérapie
imageTherapie:any;
imgURL:any
public imagPath:any;
constructor(private therapieService:TherapieService,private router:Router,private httpClient: HttpClient) { }
selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
nom:any;
description:any;

ngOnInit(): void {
}

 
public onFileChanged(event: any) {
//Select File
this.selectedFile = event.target.files[0];
}


onUpload() {
console.log(this.selectedFile);
const uploadImageData = new FormData();
uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name); 
const article = this.therapie.nom;
const description=this.therapie.description;
uploadImageData.append('article' ,JSON.stringify(article));
uploadImageData.append('description' ,JSON.stringify(description));
 

this.httpClient.post('http://localhost:8080/therapie/upload', uploadImageData
, { observe: 'response' })
  .subscribe((response) => {
    if (response.status === 200) {
      this.message = 'Image uploaded successfully';
    } else {
      this.message = 'Image not uploaded successfully';
    }
  }
  );

  getImage() {
this.httpClient.get('http://localhost:8080/therapie/getImageTherapie/' + this.imageName)
  .subscribe(
    res => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }
  );
}

}*/






