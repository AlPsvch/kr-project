import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { ServicesComponent } from './components/services/services.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {ServicesService} from "./services/services.service";
import {HttpClientModule} from "@angular/common/http";
import { PricesComponent } from './components/prices/prices.component';
import { AdvicesComponent } from './components/advices/advices.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import {AdvicesService} from "./services/advices.service";
import {PricesService} from "./services/prices.service";
import {PortfoliosService} from "./services/portfolios.service";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'advices', component: AdvicesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'portfolio-details', component: PortfolioDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    PricesComponent,
    AdvicesComponent,
    ContactsComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicesService,
  AdvicesService,
  PricesService,
  PortfoliosService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
