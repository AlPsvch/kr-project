import { Component, OnInit } from '@angular/core';
import {PriceModel} from "../../models/price.model";
import {PricesService} from "../../services/prices.service";

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  private prices: PriceModel[];

  constructor(private service: PricesService) { }

  ngOnInit() {
    this.service.getAllPrices().subscribe(response => {
      this.prices = response;
    })
  }

}
