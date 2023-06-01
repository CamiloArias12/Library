import { InputType, Field, FieldResolver, } from "type-graphql";
import  { IBook } from "../interfaces/IBook.js";

@InputType()

export class BookInput implements IBook {


  @Field({nullable:true})
  id:number

  @Field()
  title: string;

  @Field()
  publisher: string;

  @Field()
  area: string;

  @Field()
  summary: string;




}
