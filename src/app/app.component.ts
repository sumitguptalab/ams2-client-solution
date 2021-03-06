import { Component, OnInit } from '@angular/core';
import { SystemService } from '@feat/system/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private syssvc: SystemService) {}

  ngOnInit() {
    // console.log("cfg:", this.syssvc.settings);
  }
}
