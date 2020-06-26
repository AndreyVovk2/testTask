import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean | UrlTree {
    console.log(localStorage.getItem('register'));
    if (localStorage.getItem('register') === null && localStorage.getItem('login') === null) {
      return true;
    } else {
      this.router.navigate(['auth']).finally();
      return false;
    }
  }

}
