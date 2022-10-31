import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl ="http://localhost:8080/email/";
  constructor(private https: HttpClient, public login:LoginService) { }


  public createemail(email:Email) : Observable<Object>{
    // if(this.login.isMedecinPrincipal()){
    //   email.emaild="mahdi.menaa@ensi-uma.tn";
    //   return this.https.post(`${this.baseUrl}createemail`,email);
    // }
    // else{
    //   return this.https.post(`${this.baseUrl}createemail`,email);
    // }
    return this.https.post(`${this.baseUrl}createemail`,email);

  }

}