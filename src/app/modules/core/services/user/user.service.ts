import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private configService: ConfigService
    , private dataService: DataService) {

  }
  /**
   * Creates user
   */
  async createUser(requestBody) {
    const request = {
      url: this.configService.urlConfig.default.URLS.USER.SIGNUP,
      data: requestBody
    };
    return this.dataService.postWithHeaders(request);
  }
  async signIn(requestBody) {
    const request = {
      url: this.configService.urlConfig.default.URLS.USER.SIGNIN,
      data: requestBody
    };
    console.log("In create user service", request);
    return this.dataService.postWithHeaders(request);
    // return this.http.post(environment.baseUrl + this.configService.urlConfig.default.URLS.USER.SIGNIN, body, { observe: 'response' })
  }
}
