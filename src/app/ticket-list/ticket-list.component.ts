import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
sub!: subscription;

  constructor() { }
  
tickets: ITicket[] = [];

  ngOnInit(): void {
    this.sub = this.ticketsService.getTickets().subscribe({
      next: tickets => {
        this.tickets = tickets;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
