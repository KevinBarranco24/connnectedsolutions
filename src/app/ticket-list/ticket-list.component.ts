import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { TicketService } from '../Services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  _ticketList: Ticket[] = [];

  constructor(private ts: TicketService) { }
  
  ngOnInit(): void {
    this._ticketList = this.ts.GetTickets().sort((a,b) => Number(a.datetime) - Number(b.datetime));
  }
}
