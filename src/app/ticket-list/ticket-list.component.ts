import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ticket } from '../Models/Ticket';
import { TicketService } from '../Services/ticketService.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  _ticketList: Ticket[] = [];

  constructor(private ts: TicketService) { }
  
  ngOnInit(): void {
    this._ticketList = this.ts.getTickets();
  }
}
