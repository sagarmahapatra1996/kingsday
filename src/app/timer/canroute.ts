import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthguardService } from '../authguard.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginActivate implements CanActivate {
    constructor(private authService: AuthguardService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.getCanRoute() === 0) {
            return false;
        }
        return true;
    }
}