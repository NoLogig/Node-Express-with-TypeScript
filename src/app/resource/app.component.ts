import { Component } from '@angular/core';
import { ResourceService } from "./resource.service";

@Component({
  selector: 'res-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class ResourceComponent {

  constructor(private resourceService: ResourceService) {
    resourceService.getResources('myCollection').subscribe(
      (res) => console.log(res),
      err => console.log(err),
      () => console.log("service_getResource-myCol: DONE")
    )
  };
}


