import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PortfolioModel} from "../models/portfolio.model";

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {
  private GET_ALL_URL = '/api/portfolios';

  constructor(private http: HttpClient) {
  }

  getAllPortfolios(): Observable<PortfolioModel[]> {
    return this.http.get<PortfolioModel[]>(this.GET_ALL_URL);
  }

  getPortfolioById(id: string): Observable<PortfolioModel> {
    let params = new HttpParams();
    if (id != null) {
      params = params.append('id', id);
    }
    return this.http.get<PortfolioModel>(this.GET_ALL_URL + '/portfolio', {
      params: params
    });
  }
}
