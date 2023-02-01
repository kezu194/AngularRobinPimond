import { Student } from "./student";

export enum Major {
  NATIONAL = "national",
  INTERNATIONAL = "international"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived: boolean;
}
