//C'est le service du Médecin

import { Medecin } from './../medecin';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl ="http://localhost:8080/medecin/";

  //name="from service database"

  constructor(private httpClient: HttpClient){}
  
  /*getName(){
    return this.name;
  }*/
  public getListeMedecin(): Observable<Medecin[]>{
    return this.httpClient.get<Medecin[]>(`${this.baseUrl}getAll`);
  }
  //ajouter un médecin secondaire
  public createMedecin(medecin:Medecin) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}createMedecin`,medecin);
  }
  //updateMedecin
  public getMedecinById(id:number):Observable<Medecin>{
    return this.httpClient.get<Medecin>(`${this.baseUrl}get/${id}`);
  }

  public findMedecinByEmail(email:string):Observable<Medecin>{
    return this.httpClient.get<Medecin>(`${this.baseUrl}find/${email}`);
  }

  public updateMedecin(id:number,medecin:Medecin): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,medecin);
  }

  public deleteMedecin(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }

  public loginmedecin(medecin:Medecin) : Observable<any>{
    
    return this.httpClient.post(`${this.baseUrl}login`,medecin);
  }
}
