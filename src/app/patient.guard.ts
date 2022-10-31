import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  constructor(private router:Router,private login : LoginService){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean{
      if(this.login.isPatient()){
        return true;
      }
      else{
        this.router.navigate(['/autorisation'])
        return false;
      }
    }
  
}
