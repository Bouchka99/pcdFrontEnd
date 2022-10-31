import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rendezvous } from '../rendezvous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  private baseUrl ="http://localhost:8080/rendezvous/";

 

  constructor(private httpClient: HttpClient){}
  
  public getListeRendezvous(): Observable<Rendezvous[]>{
    return this.httpClient.get<Rendezvous[]>(`${this.baseUrl}getAll`);
  }

  public getListeRendezvousarrivee(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}getAllarrivee`);
  }

  //ajouter un médecin secondaire
  public createRendezvous(rendezvous:Rendezvous) : Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}createRendezvous`,rendezvous);
  }
  public getRendezvousById(id:number):Observable<Rendezvous>{
    return this.httpClient.get<Rendezvous>(`${this.baseUrl}get/${id}`);
  }

  public updateRendezvous(id:number,rendezvous:Rendezvous): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,rendezvous);
  }

  public deleteRendezvous(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }
}
