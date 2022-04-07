import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { Location } from '../models/Location';
import { Ticket } from '../models/Ticket';
import { CategoryService } from '../Services/category.service';
import { locationService } from '../Services/location.service';
import { TicketService } from '../Services/ticket.service';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private ts: TicketService, private ls: locationService, private ct: CategoryService) { }
  _locations: Location[] = [];
  _categories: Category[] = [];

  username: string = "";
  location: string = "";
  //datetime: string = "";
  datetime: Date = new Date(Date.now());
  category: string = "";
  description: string = "";

  ngOnInit(): void {
    this._locations = this.ls.GetLocations();
    this._categories = this.ct.GetCategories();
  }

  save(){
    if(this.username != "" && this.location != "" 
    && this.category != "" && this.description != ""){
      var T = new Ticket();
      T.username = this.username;
      T.datetime = this.datetime;
      T.description = this.description;
      T.location = this.location;
      T.category = this.category;
      this.ts.AddTicket(T);
    }
    this.username = "";
    this.category = "";
    this.datetime;
    this.description = "";
    this.location = "";
    this.location = "";
  }
}
