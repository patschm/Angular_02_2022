import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
      this.auth.requestedUrl = state.url;
      if (this.auth.isLoggedIn) return true;
      this.router.navigate(['login']);
      return false;
  }
  constructor(private router: Router, private auth: AuthService)
  {

  }
}
