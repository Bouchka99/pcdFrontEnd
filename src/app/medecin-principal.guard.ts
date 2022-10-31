import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinPrincipalGuard implements CanActivate {
  constructor(private router:Router,private login : LoginService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
      if(this.login.isMedecinPrincipal()){
        return true;
      }
      else{
        this.router.navigate(['/autorisation'])
        return false;
      }
    }
  }
  

