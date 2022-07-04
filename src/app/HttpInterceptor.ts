import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorTshop implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('accessToken') != null){
        const token = localStorage.getItem('accessToken')
        const headers = new HttpHeaders()
            // .set('accessToken', token)
            .set('Authorization','Bearer ' + token)
            .set('shopid', '8155298472159123')
        const AucountRequest = httpRequest.clone({ headers: headers })
        return next.handle(AucountRequest)
    }else{
        return next.handle(httpRequest)
    }
  }
}
