import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {AvailableServiceModel} from "../../models/available.service.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  private id: string;

  private avlblService: AvailableServiceModel;

  constructor(private route: ActivatedRoute,
              private service: ServicesService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.service.getServiceById(this.id).subscribe(response => {
        this.avlblService = response;
      });
    })
  }

}
