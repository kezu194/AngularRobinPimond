import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    if (ticket.major !== null && ticket.student !== null){
      this.ticketList.push(ticket);
      this.tickets$.next(this.ticketList);
    } else {
      console.log("Error, no major or student given");
    }
    
  }

  deleteTicket(ticket: Ticket){
    this.ticketList.forEach((element, index)=>{
      if(element.title === ticket.title
         && element.student === ticket.student 
         && element.date === ticket.date  // This attribute assure us to only delete the exact ticket
         && element.description === ticket.description 
         && element.major === ticket.major){
          // this.ticketList.splice(index, 1); 
          this.ticketList[index].archived = true;
      }
    })
  }
}
