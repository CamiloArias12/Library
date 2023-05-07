import {Field, InputType} from 'type-graphql'
import { IUser } from '../entity/User.js';




@InputType()
export class InputUser implements IUser{
   
   @Field()
   firstName: string;

   @Field()
   lastName: string;

   @Field()
   age: number;

}
