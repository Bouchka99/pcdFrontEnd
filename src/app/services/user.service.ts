//C'est le service du Médecin

import { User } from './../user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ="http://localhost:8080/user/";

  //name="from service database"

  constructor(private httpClient: HttpClient){}
  
  /*getName(){
    return this.name;
  }*/

  
  public getListeUser(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}getAll`);
  }
  //ajouter un médecin secondaire
  public createUser(user:User) : Observable<any>{
    return this.httpClient.post(`${this.baseUrl}createUser`,user);
  }
  //updateMedecin
  public getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}get/${id}`);
  }

  public updateUser(id:number,user:User): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}update/${id}`,user);
  }

  public deleteUser(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }

  public findUserByEmail(email:string):Observable<any>{
    return this.httpClient.get<User>(`${this.baseUrl}find/${email}`);
  }

}
