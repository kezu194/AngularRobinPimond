import { Ticket, Major } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Barcelone',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.INTERNATIONAL,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: Major.NATIONAL,
    archived: false
  },
  {
    title: 'SI6 in London',
    description: 'Trajet en train',
    date: dateToday,
    student: 'Luke',
    major: Major.INTERNATIONAL,
    archived: true
  },
];
