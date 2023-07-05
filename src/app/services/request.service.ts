import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  getRequest<Type>(url: string){
    return this.http.get<Type>(url)
  }
}
