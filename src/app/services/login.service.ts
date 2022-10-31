import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  // public users: User[] = [{ "email": "testttttttt@gmail.com", "password": "mahdimenaa", "role": "ms" },
  // { "email": "rachidmenaa@gmail.com", "password": "rachidmenaa", "role": "ms" },
  // { "email": "hamdi@gmail.com", "password": "aaa", "role": "mp" }];

  public users: User[];
  public loggedUser: string;
  public isLoggedIn: Boolean = false;
  public roles: string; //stocker le role du user connecté
  constructor(private userService: UserService,private router:Router) { }


  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers():void{
    this.userService.getListeUser().subscribe(data=>{
      this.users=data;
    });
  }

  public SignIn(user: User): Boolean {
    console.log("here1")
    this.userService.getListeUser().subscribe(data=>{
      this.users=data;
      console.log("users "+JSON.stringify(this.users,null," "))
    });
    console.log("here2")
      let validUser: Boolean = false;
      console.log("here3")
      this.users.forEach((curUser) => {
        if (user.email == curUser.email && user.password == curUser.password) {
          console.log("curUser " + curUser)
          validUser = true;
          //console.log("validUser"+validUser);
          this.loggedUser = curUser.email;
          this.isLoggedIn = true;
          this.roles = curUser.role;
          user.role=curUser.role;
          //local storage ne stoque que des string
          localStorage.setItem('loggedUser', String(this.loggedUser));//ele a ete     localStorage.setItem('loggedUser', (this.loggedUser);
          localStorage.setItem('isLoggedIn', String(this.isLoggedIn))//car elle est boolean
          //return validUser;
          //console.log("validUser"+validUser);
 
        }
      })
      
    return validUser;
  }//fin signIn()

  LogOut(){
    this.isLoggedIn = false;
    this.loggedUser = "";
    this.roles = "";
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn',String(this.isLoggedIn))
    this.router.navigate(['./navbar0']);
  }


  setLoggedUserFromLocalStorage(login : string){   //pour ne pas à chaque fois faire entrer les coordonnées d'un utilisateur déjà connecté
    
    this.isLoggedIn = true;
    this.loggedUser = login;
    this.getUserRole(login);
    
  }

  getUserRole(ch:string){
    this.users.forEach((curUser) =>{
      if( curUser.email == ch){
        this.roles = curUser.role;
      }
    })
  }

  isMedecinPrincipal():boolean{
    if(this.roles=="mp")
    return true;
    else return false;
  }

  isMedecinSecondaire():Boolean{
    if(this.roles=="ms")
    return true;
    else return false;
  }

  isMedecin():Boolean{
    if(this.roles=="ms" || this.roles=="mp")
    return true;
    else return false;
  }

  isSecretaire():Boolean{
    if(this.roles=="s")
    return true;
    else return false;
  }

  isPatient():Boolean{
    if(this.roles=="p")
    return true;
    else return false;
  }

}//fin clase login.service.ts