import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GlobalService } from '../global.service';

type AccessData = {
  accessToken:string,
  user: Users
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<Users|null>(null);

  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(
    map(user => !!user),
    tap(user =>  this.syncIsLoggedIn = user)
    )

  syncIsLoggedIn:boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    private globalvc: GlobalService
    ) {

      this.restoreUser()

    }


  registerUrl:string = environment.registerUrl
  loginUrl:string = environment.loginUrl

  register(newUser:Partial<Users>):Observable<AccessData>{
    return this.http.post<AccessData>(this.registerUrl,newUser)
    .pipe(tap(() => {
      this.globalvc.getAllUsers().subscribe(users => this.globalvc.userSubject.next(users))
    }))
  }

  login(loginData:Login):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,loginData)
    .pipe(tap(data => {

      this.authSubject.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))

      this.autoLogout(data.accessToken)

    }))
  }


  logout(){

    this.authSubject.next(null)
    localStorage.removeItem('accessData')

    this.router.navigate(['/auth/login'])
  }


  getAccessToken():string{
    const userJson = localStorage.getItem('accessData')
    if(!userJson) return '';

    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return '';

    return accessData.accessToken
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();


    setTimeout(()=>{
      this.logout()
    },expMs)
  }


  restoreUser(){

    const userJson = localStorage.getItem('accessData')
    if(!userJson) return;

    const accessData:AccessData = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return;

    this.authSubject.next(accessData.user)
    this.autoLogout(accessData.accessToken)

  }
}
