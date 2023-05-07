import { InputType, Field, FieldResolver, } from "type-graphql";
import type { ILoan } from "../interfaces/ILoan.js";

@InputType()
export class LoanInput implements ILoan {
  @Field()
  id: number;

  @Field()
  startDate: Date;

  @Field()
  returnDate: Date;

  @Field()
  isReturned: boolean;

  @Field()
  userId: number;

  @Field()
  bookId: number;
}
