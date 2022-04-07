import { Component, OnInit } from '@angular/core';
import { locationService } from '../Services/location.service';
import { Location } from '../models/Location';

@Component({
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  constructor(private ls: locationService) { }
  _locations: Location[] = []

  name: string = "";
  owner: string  = "";
  description: string = "";

  ngOnInit(): void {
    this._locations = this.ls.GetLocations();
  }

  save(){
    this.description = this.description == "" ? "No se proporcionó una descripción." : this.description;
    if(this.name != "" && this.owner != ""){
      this._locations.push(
        {
          name: this.name,
          owner: this.owner,
          description: this.description
        }
      );
    }
    this.name = "";
    this.owner = "";
    this.description = "";
  }
}
