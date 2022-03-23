import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { locationService } from '../Services/location.service';
import { Location } from '../Models/Location';

@Component({
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient, private ls: locationService) { }
  _locations: Location[] = []
  private sub!: Subscription;

  name: string = "";
  owner: string  = "";
  description: string = "";

  ngOnInit(): void {
    this.sub = this.ls.GetLocations().subscribe(data => this._locations = data);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
