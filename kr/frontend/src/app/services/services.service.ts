import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {AvailableServiceModel} from "../models/available.service.model";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private GET_ALL_URL = '/api/services';

  constructor(private http: HttpClient) {
  }

  getServiceById(id: string): Observable<AvailableServiceModel> {
    let params = new HttpParams();
    if(name != null) {
      params = params.append('id', id);
    }
    return this.http.get<AvailableServiceModel>(this.GET_ALL_URL, {
      params: params
    });
  }
}
