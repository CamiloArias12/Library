import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  User  from "../entity/User.js";
import {GraphQLError}from "graphql"
import { UserInput, UserLoginInput, UserUpdateAdmin } from "../input/UserInput.js";


@Resolver(User)
export class UserResolver{

   @Query(()=> User)
   async users( @Arg('userId')userId: number){
      let user = new User()
      console.log("asjkfasdkjf")
      user.id= userId
      return await user.findUser() ?? null
   }

   @Query(()=>[ User])
   async usersAll( ){
      let user = new User()
      let data= user.findUserAll()
      return data
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
   async userUpdate(@Arg("update") update: UserInput ): Promise<User | null>{
      const user: User | null =new User(update)
   
	return await user.createUser()
      }

   @Mutation(()=> User) 
   async userAdmin(@Arg("updateAdmin") updateAdmin: UserUpdateAdmin ): Promise<User | null>{
      const user: User | null =new User()
      user.id=updateAdmin.id
      user.rol=updateAdmin.rol
      user.isActive=updateAdmin.isActive
	await user.createUser()
	return await user.findUser();
      }


   @Mutation(()=> User) 
   async userValidate(@Arg("validationUser") userInput: UserLoginInput ):Promise <User | null>{
      console.log(userInput)
      const user: User | null =new User()
      user.email= userInput.email
      user.password=userInput.password
      
      const validateUser= await user.validateUser()
      console.log(userInput)
      console.log(validateUser)

      return validateUser 

   }


}
