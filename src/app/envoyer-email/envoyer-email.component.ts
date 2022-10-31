import { LoginService } from './../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../email';
import { EmailService } from '../services/email.service';


@Component({
  selector: 'app-envoyer-email',
  templateUrl: './envoyer-email.component.html',
  styleUrls: ['./envoyer-email.component.css']
})
export class EnvoyerEmailComponent implements OnInit {


constructor(private emailservice:EmailService,private router:Router,public login:LoginService){ }
ngOnInit(): void {
}
email:Email=new Email();

onSubmit(){
  this.emailservice.createemail(this.email).subscribe(data => {console.log(data);
    if(this.login.isMedecinPrincipal()){
      this.router.navigate(['medecinPrincipal']);
    }
    else if(this.login.isMedecinSecondaire()){
      this.router.navigate(['medecinSecondaire']);
    }
    else if(this.login.isPatient()){
      this.router.navigate(['patient']);
    }
    else {
      this.router.navigate(['secretaire']);
    }

    });
  }
          
}