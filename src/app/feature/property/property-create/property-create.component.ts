import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { PropertyService } from '@feat/property/property.service';
import { Property } from '@feat/property/property';
import { Asset } from '@feat/asset/asset';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-property-create',
  templateUrl: './property-create.component.html',
  styleUrls: ['./property-create.component.css']
})
export class PropertyCreateComponent implements OnInit {

  pagetitle: string = "Property Create";

  asset: Asset = new Asset(0, "", "", "", null, null, null, 0, null, null, null, null, 0);
  property: Property = new Property(0, '', '', '', '', '', '', '', '', 0, this.asset, true);

  save(): void {
    console.log("PropertyCreate preupdate:", this.property);
    this.propertysvc.create(this.property)
      .subscribe(resp => {
        console.log("PropertyCreate resp:", resp);
        this.router.navigateByUrl("/properties/list");
      });
  }

  constructor(
    private propertysvc: PropertyService,
    private syssvc: SystemService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
