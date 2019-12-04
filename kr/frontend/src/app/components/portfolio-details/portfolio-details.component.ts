import {Component, OnInit} from '@angular/core';
import {PortfoliosService} from "../../services/portfolios.service";
import {PortfolioModel} from "../../models/portfolio.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  private id: string;

  private portfolio: PortfolioModel;

  constructor(private route: ActivatedRoute,
              private service: PortfoliosService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getPortfolioById(this.id).subscribe(response => {
        this.portfolio = response;
      });
    })
  }

}
