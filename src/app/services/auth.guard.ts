import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSerice: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSerice.isAdmin().then(
      // tslint:disable-next-line: ban-types
      (authenticate: Boolean) => {
        if (authenticate) {
          return true;
        } else  {
          this.router.navigate(['/home']);
          return false;
        }
      }
    );
  }

}
