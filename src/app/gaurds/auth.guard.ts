import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService : LoginService, private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let res = this.loginService.getLoginDetails().isLoggedIn;
    if(!res){
      this.router.navigate(['login']);
    }
    return res;
  }
}
