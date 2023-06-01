import { InputType, Field, FieldResolver, } from "type-graphql";
import type { ILoan } from "../interfaces/ILoan.js";

@InputType()
export class LoanInput implements ILoan {

  @Field()
  startDate: Date;

  @Field()
  returnDate: Date;

  @Field()
  userId: number;

  @Field()
  bookId: number;
}


@InputType()
export class LoanInputUpdate implements ILoan {

  @Field()
  id:number

  @Field()
  returned:boolean

  @Field()
  startDate: Date;

  @Field()
  returnDate: Date;


  @Field()
  bookId: number;
}
