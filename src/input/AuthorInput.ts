import { InputType, Field, } from "type-graphql";
import { IAuthor } from "../interfaces/IAuthor.js";

@InputType()
export class AuthorInput implements IAuthor {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  nationality: string;

  @Field()
  biography: string;
}

