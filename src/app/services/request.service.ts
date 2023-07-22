import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  getRequest<Type>(url: string){
    return this.http.get<Type>(url)
  }
  post<T>(url:string, value: T ){
    let header = new HttpHeaders({'Content-type':'application/json'})
    return this.http.post(url, value, {headers: header})
  }
  delete(url:string){
    return this.http.delete(url)
  }
  put(url:string, value: Object){
    let header = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.put( url, value, {headers: header})
  }
}
