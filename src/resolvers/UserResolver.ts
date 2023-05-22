import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  User  from "../entity/User.js";
import {GraphQLError}from "graphql"
import { UserInput, UserInputPassword} from "../input/UserInput.js";


@Resolver(User)
export class UserResolver{

   @Query(()=> User)
   async users( @Arg('userId')userId: number){
      let user = new User()
      console.log("asjkfasdkjf")
      user.id= userId
      return await user.findUser() ?? null
   }

   @Mutation(()=> User) 
   async userCreate(@Arg("create") create: UserInput ){
      console.log("Hello")
      const user: User | null =new User(create)
   
      if(await user.findUser()===null){
	 await user.createUser()
	 return await user.findUser()
      }else{
	 return null;
      }

   }
   @Mutation(()=> User) 
   async userValidate(@Arg("login") userInput: UserInputPassword ){
      const user: User | null =new User()
      console.log(userInput)
      user.email=userInput.email
      user.password=userInput.password

      return await user.validateUser() 

   }

}
