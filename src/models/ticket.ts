export enum Major {
  NATIONAL = "national",
  INTERNATIONAL = "international"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  author?: string;
  major?: Major;
}
