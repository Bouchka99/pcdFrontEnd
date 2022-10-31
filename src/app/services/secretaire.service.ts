import { Secretaire } from './../secretaire';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {

  private baseUrl ="http://localhost:8080/secretaire/";

  constructor(private httpClient: HttpClient){}

  public getListeSecretaire(): Observable<Secretaire[]>{
    return this.httpClient.get<Secretaire[]>(`${this.baseUrl}getAll`);
  }
  //ajouter une sécretaire secondaire
  public createSecretaire(secretaire:Secretaire):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}createSecretaire`,secretaire);
  }
  public getSecretaireById(id:number):Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.baseUrl}get/${id}`);
  }

  public updateSecretaire(id:number,secretaire:Secretaire): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,secretaire);
  }

  public deleteSecretaire(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }

  public loginsecretaire(secretaire:Secretaire) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}login`,secretaire);
  }

  public findSecretaireByEmail(email:string):Observable<Secretaire>{
    return this.httpClient.get<Secretaire>(`${this.baseUrl}find/${email}`);
  }
}
