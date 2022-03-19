import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from '../Models/Ticket';
import { TicketService } from '../Services/ticketService.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  _ticketList: Ticket[] = [];
  sub!: Subscription;

  constructor(private ticketService: TicketService) { }
  
  ngOnInit(): void {
    this.sub = this.ticketService.getTickets().subscribe({next: data => this._ticketList = data});      
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
