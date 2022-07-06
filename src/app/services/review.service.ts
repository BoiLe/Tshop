import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataReviewDTO } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private REST_API_SERVER ='https://tshop-dev.tpos.dev'
  constructor(private http: HttpClient) { }
  public getReviewShopList(pageIndex: number, pageSize: number, searchText?: string): Observable<DataReviewDTO> {
    const url= `${this.REST_API_SERVER}/api/v1/appshop-review/list-review-shop${this.getParams(pageIndex, pageSize, searchText)}`
    return this.http.get<DataReviewDTO>(url)
  } 
  getParams(pageIndex: number, pageSize: number, searchText?: string) {
    let skipCount = (pageIndex - 1) * pageSize
    let result = `?SkipCount=${skipCount}&MaxResultCount=${pageSize}`

    if (searchText ) {
      result += '&filter='
    }

    if (searchText) {
      result += `customerName~contains~${searchText}`
     
      return result
    }

   
    return result
  }
}
