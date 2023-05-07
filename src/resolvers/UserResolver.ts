import { Arg,Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entity/User.js';
import  {InputUser} from './UserInput.js'

@Resolver(User)
export class UserReolver{


    @Query(() => User, { nullable: true })
  async userFin(@Arg("id") id: number): Promise<User | undefined> {
     return new User()
  }
   @Mutation(() => User ,{nullable:true})
   async user(@Arg("userCreate") userCreate : InputUser){
      let user : User | null = new User(userCreate)
      await user.createUser()

      return user
      

   }



}

