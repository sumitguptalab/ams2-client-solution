import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '@feat/system/system.service';
import { PropertyService } from '@feat/property/property.service';
import { Property } from '@feat/property/property';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  pagetitle: string = "Property Detail";

  property: Property;

  showVerifyDelete: boolean = false;

  edit(): void {
    this.router.navigateByUrl("/properties/edit/"+this.property.Id);
  }
  remove(): void {
    this.showVerifyDelete = !this.showVerifyDelete;
  }
  verify(): void {
    this.propertysvc.remove(this.property)
      .subscribe(resp => {
        console.log("PropertyRemove:", resp);
        this.router.navigateByUrl("/properties/list");
      });
  }


  constructor(
    private propertysvc: PropertyService,
    private syssvc: SystemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.propertysvc.get(+id)
      .subscribe(resp => {
        this.property = resp.Data;
        console.log("PropertyGet:", this.property);
      });
  }

}
