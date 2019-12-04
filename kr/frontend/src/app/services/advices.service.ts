import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AdviceModel} from "../models/advice.model";

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {
  private GET_ALL_URL = '/api/advices';

  constructor(private http: HttpClient) {
  }

  getAllAdvices(): Observable<AdviceModel[]> {
    return this.http.get<AdviceModel[]>(this.GET_ALL_URL);
  }
}
