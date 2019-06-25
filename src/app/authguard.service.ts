import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  canRoute = 0;
  constructor() { }

  getCanRoute() {
    return this.canRoute;
  }
  setCanRoute(value: number) {
    this.canRoute = value;
  }
}
