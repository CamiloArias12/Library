export interface IBook {
  id?: number;
  title: string;
  publisher: string;
  area: string;
  coverUrl?: string | null;
  digitalUrl?: string | null;
  physicalAvailable: boolean;
}
