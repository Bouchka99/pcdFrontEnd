import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Therapie } from '../therapie';
@Injectable({
  providedIn: 'root'
})
export class TherapieService {
  private baseUrl ="http://localhost:8080/therapie/";


  constructor(private httpClient: HttpClient) { }
  
  public getListeTherapie(): Observable<Therapie[]>{
    return this.httpClient.get<Therapie[]>(`${this.baseUrl}getAll`);
  }
  //ajouter une thérapie
  public createTherapie(therapie:Therapie):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}createTherapie`,therapie);
  }
  public getTherapieById(id:number):Observable<Therapie>{
    return this.httpClient.get<Therapie>(`${this.baseUrl}get/${id}`);
  }

  public updateTherapie(id:number,therapie:Therapie): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,therapie);
  }

  public deleteTherapie(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }

  public updateTherapieRate(id:number,therapie:Therapie): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}updateRate/${id}`,therapie);
  }

  public updateTherapielistRate(id:number,email:string): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}updateTherapielistRate/${id}`,email);
  }
}
