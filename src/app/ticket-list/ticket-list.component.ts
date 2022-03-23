import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from '../Models/Ticket';
import { TicketService } from '../Services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit, OnDestroy {
  _ticketList: Ticket[] = [];
  sub!: Subscription;

  constructor(private ts: TicketService, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.sub = this.ts.GetTickets().subscribe(data => this._ticketList = data);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
