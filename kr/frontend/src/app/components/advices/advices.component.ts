import { Component, OnInit } from '@angular/core';
import {AdviceModel} from "../../models/advice.model";
import {ServicesService} from "../../services/services.service";
import {AdvicesService} from "../../services/advices.service";

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  private advices: AdviceModel[];

  constructor(private service: AdvicesService) { }

  ngOnInit() {
    this.service.getAllAdvices().subscribe(response => {
      this.advices = response;
    })
  }

}
