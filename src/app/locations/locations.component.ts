import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Ubicacion } from '../Models/Location';
import { locationService } from '../Services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  ub: Ubicacion = new Ubicacion;
  ubicacion: string  = "";
  descripcion: string = "";
  requisitor: string = "";

  ubicaciones: Ubicacion[] = []
  constructor(private ls: locationService) { }

  ngOnInit(): void {
    this.ubicaciones = this.ls.getLocations();
  }

  addLocation(){
    this.ub.nombre = this.ubicacion;
    this.ub.descripcion = this.descripcion;
    this.ub.requisitor = this.requisitor;
    this.ls.addLocation(this.ub);
  }

}
