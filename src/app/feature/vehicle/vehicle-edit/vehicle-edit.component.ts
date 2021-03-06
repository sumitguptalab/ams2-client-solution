import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { VehicleService } from '@feat/vehicle/vehicle.service';
import { Vehicle } from '@feat/vehicle/vehicle';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  pagetitle: string = "Vehicle Edit";

  vehicle: Vehicle;

  save(): void {
    console.log("VehicleEdit preupdate:", this.vehicle);
    this.Vehiclesvc.change(this.vehicle)
      .subscribe(resp => {
        console.log("VehicleEdit resp:", resp);
        this.router.navigateByUrl("/vehicles/list");
      });
  }

  constructor(
    private Vehiclesvc: VehicleService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("VehicleGet id:", id);
    this.Vehiclesvc.get(+id)
      .subscribe(resp => {
        this.vehicle = resp.Data;
        console.log("VehicleGet:", this.vehicle);
      });
  }

}
