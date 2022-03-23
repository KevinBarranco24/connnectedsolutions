import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '../Models/Location';
import { locationService } from '../Services/location.service';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {
  constructor(private ls: locationService) { }
  _locations: Location[] = [];
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.ls.GetLocations().subscribe(data => this._locations = data);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
