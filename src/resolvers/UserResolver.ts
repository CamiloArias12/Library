import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  User  from "../entity/User.js";
import {GraphQLError}from "graphql"
import { UserInput, UserValidateInput } from "../input/UserInput.js";


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
   async userValidate(@Arg("validationUser") userInput: UserValidateInput ):Promise <User | null>{
      console.log(userInput)
      const user: User | null =new User()
      user.email= userInput.email
      user.password=userInput.password
      
      const validateUser= await user.validateUser()
      console.log(userInput)
      console.log(validateUser)

      return validateUser ?? null

   }


}
