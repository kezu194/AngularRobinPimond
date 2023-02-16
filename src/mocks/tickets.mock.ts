import { Ticket, Major } from '../models/ticket';
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Barcelone',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.INFORMATIQUE,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Major.BIGDATA,
    archived: false
  },
  {
    title: 'SI6 in London',
    description: 'Trajet en train',
    date: dateToday,
    student: STUDENTS_MOCKED[2],
    major: Major.INFORMATIQUE,
    archived: true
  },
];
