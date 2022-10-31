import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl ="http://localhost:8080/patient/";

  //name="from service database"

  constructor(private httpClient: HttpClient){}
  
  /*getName(){
    return this.name;
  }*/
  public getListePatient(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}getAll`);
  }
  //ajouter un médecin secondaire
  public createPatient(patient:Patient) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}createPatient`,patient);
  }

  public loginpatient(patient:Patient) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}login`,patient);
  }

  public getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}get/${id}`);
  }

  public updatePatient(id:number,patient:Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,patient);
  }


  public findPatientByEmail(email:string):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}find/${email}`);
  }

}