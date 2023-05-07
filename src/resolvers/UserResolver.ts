import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  User  from "../entity/User.js";
import {GraphQLError}from "graphql"
import { UserInput } from "../input/UserInput.js";


@Resolver(User)
export class UserResolver{

   @Query(()=> User)
   async users( @Arg('userId')userId: number){
      let user = new User()
      user.id= userId
      return await user.findUser()
   }

   @Mutation(()=> User) 
   async userCreate(@Arg("create") create: UserInput ){
      let user: User | null =new User(create)
	 await user.createUser()
      return await user.findUser()

   }

}
