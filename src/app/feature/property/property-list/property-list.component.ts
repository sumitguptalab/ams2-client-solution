import { Component, OnInit } from '@angular/core';

import { PropertyService } from '@property/property.service';
import { Property } from '@property/property';
import { SystemService } from '@system/system.service';
import { JsonResponse } from '@feat/utility/json-response';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})

export class PropertyListComponent implements OnInit {

  pagetitle: string = "Property List";
  createlink: string = "/properties/create";
  createlinkname: string = "Create New";

  properties: Property[];

  searchfor: string = "";

  sortProperty: string = "Code";
  sortOrder: string = "asc";
  sort(sortBy: string): void {
    if(sortBy === this.sortProperty)
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    else {
      this.sortProperty = sortBy;
      this.sortOrder = 'asc';
    }
  }

  constructor(
    private propertysvc: PropertyService,
    private syssvc: SystemService
  ) { }

  ngOnInit() {
    this.propertysvc.list()
      .subscribe(resp => {
        this.properties = resp.Data;
        console.log("PropertyList:", this.properties);
      });
  }

}
