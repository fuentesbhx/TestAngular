import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

export const AUTH_TOKEN_KEY = 'auth-token-key';
export const AUTH_USER_DATA = 'auth-user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authToken: string | null = null;
  public objUser: User | null = null;

  constructor() {  }

  login(objUser: User) {
    this.authToken = objUser.email;
    sessionStorage.setItem(AUTH_TOKEN_KEY, objUser.email);
    sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(objUser));
    this.check();
  }

  async check() {
    const authToken = await sessionStorage.getItem(AUTH_TOKEN_KEY);
    const objUser = await sessionStorage.getItem(AUTH_USER_DATA);
    this.authToken = authToken;
    if(objUser) {
      this.objUser = JSON.parse(objUser) as User;
    } else {
      this.objUser = null; 
    } 
  }
  
  isLoggedIn() {
    return this.authToken !== null;
  }

  public logout() {
    if(!this.isLoggedIn()) {
      return;
    } else {
      sessionStorage.clear();
    }
  }
}
