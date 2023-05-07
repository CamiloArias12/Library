import { InputType, Field, } from "type-graphql";
import { IAuthor } from "../interfaces/IAuthor.js";

@InputType()
export class AuthorInput implements IAuthor {
  @Field({nullable:true})
  id: number;

  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  nationality: string;
}

