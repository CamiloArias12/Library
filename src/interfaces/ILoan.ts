export interface ILoan {
  id?: number;
  startDate: Date;
  returnDate: Date;
  isReturned: boolean;
  userId: number;
  bookId: number;
}
