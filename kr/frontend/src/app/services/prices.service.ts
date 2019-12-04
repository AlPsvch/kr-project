import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PriceModel} from "../models/price.model";

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private GET_ALL_URL = '/api/prices';

  constructor(private http: HttpClient) {
  }

  getAllPrices(): Observable<PriceModel[]> {
    return this.http.get<PriceModel[]>(this.GET_ALL_URL);
  }
}
