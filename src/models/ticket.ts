export enum Major {
  NATIONAL = "national",
  INTERNATIONAL = "international"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
  archived: boolean;
}
