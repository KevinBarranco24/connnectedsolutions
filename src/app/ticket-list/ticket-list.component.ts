import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  pageTitle = "Tickets";
  
  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
