import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
  * Contains base Url for api end points
  */
  baseUrl = environment.baseUrl;
  /**
   * angular HttpClient
   */
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }
  /**
   * Creates user
   */
  async createUser(body) {
    console.log("In create user service", body)
    return this.http.post(environment.baseUrl + 'auth' + '/signup', body, { observe: 'response' })
  }
  async signIn(body) {
    console.log("In create user service", body)
    return this.http.post(environment.baseUrl + 'auth' + '/signin', body, { observe: 'response' })
  }
}
