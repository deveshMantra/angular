import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
  * for making post api calls with headers in response object
  *
  * @param {any} requestParam interface
  *
  */
  postWithHeaders(requestParam: any): Observable<any> {
    const httpOptions: any = {
      headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
      params: requestParam.param,
      observe: 'response'
    };
    return this.http.post(this.baseUrl + requestParam.url, requestParam.data, httpOptions)
    /* return this.http.post(this.baseUrl + requestParam.url, requestParam.data, httpOptions).pipe(
      mergeMap(({ body, headers }: any) => {
        // replace ts time with header date , this value is used in telemetry
        body.ts = this.getDateDiff((headers.get('Date')));
        //  if (body.responseCode !== 'OK') {
        //     return observableThrowError(body);
        //   }
        return observableOf(body);
      })); */
  }
  putWithHeaders(requestParam: any): Observable<any> {
    const httpOptions: any = {
      headers: requestParam.header ? this.getHeader(requestParam.header) : this.getHeader(),
      params: requestParam.param,
      observe: 'response'
    };
    return this.http.put(this.baseUrl + requestParam.url, requestParam.data, httpOptions)

  }

  /**
  * for preparing headers
  */
  private getHeader(headers?: any['headers']): any['headers'] {
    const defaultHeaders = {
      Accept: 'application/json',
      Authorization: 'Bearer ',
      'Content-Type': 'application/json'
    };
    if (headers) {
      return { ...defaultHeaders, ...headers };
    } else {
      return { ...defaultHeaders };
    }
  }
  private getDateDiff(serverdate): number {
    const currentdate: any = new Date();
    const serverDate: any = new Date(serverdate);
    if (serverdate) {
      return (serverDate - currentdate) / 1000;
    } else {
      return 0;
    }
  }
}
