import { InputType, Field, FieldResolver, } from "type-graphql";
import  { IBook } from "../interfaces/IBook.js";

@InputType()

export class BookInput implements IBook {
 
  @Field()
  title: string;

  @Field()
  publisher: string;

  @Field()
  area: string;

  @Field()
  coverUrl: string;

  @Field()
  digitalUrl: string;

  @Field()
  physicalAvailable: boolean;





}
