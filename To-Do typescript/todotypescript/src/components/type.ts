export enum Day {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thusrday = "Thusrday",
  Friday = "Friday",
  Saturday = "Saturday",
}
export type list = {
  id: string;
  todo: string;
  day: Day;
};

export enum filtertype{
  all = "all",
  active = "active",
  completed = "completed",
}