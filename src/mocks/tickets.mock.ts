import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Barcelone',
    description: '',
    date: dateToday,
    author: 'Paul',
    major: "international"
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    author: 'Anakin',
    major: "national"
  },
];
