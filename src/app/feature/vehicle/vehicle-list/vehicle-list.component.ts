import { Component, OnInit } from '@angular/core';

import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  pagetitle: string = "Vehicle List";
  createlink: string = "/vehicles/create";
  createlinkname: string = "Create New";

  sortProperty: string = "LicensePlate";
  sortOrder: string = "asc";

  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  vehicles: Vehicle[];

  searchfor: string = "";

  constructor(private vehiclesvc: VehicleService) { }

  ngOnInit() {
    this.vehiclesvc.list()
      .subscribe(resp => {
        this.vehicles = resp.Data;
        console.log("VehicleList:", this.vehicles);
        for(let v of this.vehicles) {
          v.AssetName=v.Asset.Name;
        }
      });
  }
}
