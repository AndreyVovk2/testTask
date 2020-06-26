export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Tasks {
  id: number;
  description: string;
  date: number;
  editDate: string | number;
}
