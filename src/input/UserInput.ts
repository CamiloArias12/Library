import { InputType, Field } from "type-graphql";
import { IUser } from "../interfaces/IUser.js";


@InputType()
export class UserInput implements IUser{

   @Field()
   id: number

   @Field()
   firstName:string

   @Field()
   lastName:string
   
   @Field()
   phone:string
   
   @Field()
   address:string
   
   @Field()
   email:string

   @Field()
   password: string

}

@InputType()
export class UserInputPassword implements IUser{

   id: number

   firstName:string

   lastName:string
   
   phone:string
   
   address:string
   
   @Field()
   email:string

   @Field()
   password: string

}
