import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Models/Ticket';
import { TicketService } from '../Services/ticketService.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ticket = new Ticket();

  constructor(private ticketService: TicketService) { }

  // addTicket(){
  //   this.ticketService.addTickets(this.ticket).subscribe();
  // }

  ngOnInit(): void {
  }

}
