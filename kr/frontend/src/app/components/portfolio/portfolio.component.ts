import {Component, OnInit} from '@angular/core';
import {PortfolioModel} from "../../models/portfolio.model";
import {PortfoliosService} from "../../services/portfolios.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private portfolios: PortfolioModel[];

  constructor(private service: PortfoliosService,
              private router: Router) {
  }

  ngOnInit() {
    this.service.getAllPortfolios().subscribe(response => {
      this.portfolios = response;
    })
  }

  openPortfolioDescriptor(href: string, id: string): void {
    this.router.navigate([href], {
      queryParams: {
        id: id
      }
    });
  }

}
