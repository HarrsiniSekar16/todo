import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class AppServiceService {

  constructor(private http: HttpClient) { }
// get the url from the environment
  geturl(path: string, param: any[]) {

    let url_map = environment.services.filter(x => x.code == path);

    let url = environment.api_url + url_map[0].url;

    if (param) {
      param.forEach(x => {
        url = url + "/" + x;
      });
    }
    return url;
  }
// retrieve the  GET url 
  get<T>(url: string, param?: any[]) {

    let urlparam = this.geturl(url, param);

    return this.http.get<T>(urlparam);
  }
// retrieve the POST url 
  post<T>(url: string, body: any){
    
    let urlparam = this.geturl(url, null);

    return this.http.post<T>(urlparam,body);
  }

  // retrieve the  PUT url 
  put<T>(url: string,body:any, param?:any[]){
  
    let urlparam = this.geturl(url, param);

    return this.http.put<T>(urlparam,body);
  }
// retrieve the DELETE url 
  delete<T>(url: string, param: any[]) {

    let urlparam = this.geturl(url, param);

    return this.http.delete<T>(urlparam);
  }
}