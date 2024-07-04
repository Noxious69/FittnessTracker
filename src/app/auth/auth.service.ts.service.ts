import { Injectable } from '@angular/core';
import {UserModel} from "./user-model";
import {AuthModel} from "./auth-model";
import {Subject} from  "rxjs"


@Injectable({
  providedIn: 'root'
})
export class AuthServiceTsService {
  //Little mistake in getting this service name

  constructor() { }
  private user:UserModel | null = null;
  authCahnge = new Subject<boolean>()

  registerUser(authdata : AuthModel)  {
    this.user ={
      email:authdata.email,
      password:authdata.password,
      userId :Math.round(Math.random()*10000)
    }
    this.authCahnge.next(true);
  }

  login(authdata : AuthModel)  {
    this.user ={
      email:authdata.email,
      password:authdata.password,
      userId :Math.round(Math.random()*10000)
    }
    this.authCahnge.next(true);
  }

  logout(){
    this.user=null;
    this.authCahnge.next(true);
  }

  getUser(){
    return {...this.user}; //syntax of getting clone/copy of an object
  }

  isAuth(){
    return this.user != null
  }
}
