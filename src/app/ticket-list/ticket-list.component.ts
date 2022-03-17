import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from './Ticket';
import { TicketService } from './ticketService.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  pageTitle = "Tickets";
  ticketList: Ticket[] = [];
  err: string  = "";
  sub!: Subscription;

  constructor(private ticketService: TicketService) { }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
