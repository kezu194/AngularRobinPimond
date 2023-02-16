import { Student } from "./student";

export enum Major {
  INFORMATIQUE = "informatique",
  BIGDATA = "big data"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student: Student;
  major: Major;
  archived: boolean;
}
