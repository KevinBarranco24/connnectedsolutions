import { Component, OnInit } from '@angular/core';
import { Ubicacion } from '../Models/Location';
import { Ticket } from '../Models/Ticket';
import { locationService } from '../Services/locations.service';
import { TicketService } from '../Services/ticketService.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ubicaciones: Ubicacion[] = [];
  t: Ticket = new Ticket;
  username: string = "";
  datetime: string = "";
  location: string = "";
  description: string = "";

  constructor(private ts: TicketService, private ls: locationService) { }

  addTicket(){
    this.t.username = this.username;
    this.t.location = this.location;
    this.t.datetime = this.datetime;
    this.t.description = this.description;
    this.ts.addTicket(this.t);
  }

  ngOnInit(): void {
    this.ubicaciones = this.ls.getLocations();
  }
}
