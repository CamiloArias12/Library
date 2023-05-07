import { Resolver, Query,Mutation, Arg, UseMiddleware } from "type-graphql";
import  Loan from "../entity/Loan.js";
import {GraphQLError}from "graphql"
import { LoanInput } from "../input/LoanInput.js";
import  User  from "../entity/User.js";
import  Book  from "../entity/Book.js";


@Resolver(Loan)
export class LoanResolver{

   @Query(()=> Loan)
   async loan( @Arg('authorId')authorId: number){
      let loan = new Loan()
      loan.id= authorId
      return await loan.findLoan()
   }

   @Mutation(()=> Loan) 
   async loanCreate(@Arg("create") create: LoanInput, 
		      @Arg("userId") userId: number,
		      @Arg("bookId") bookId: number,

		     ){

       let user =new User()
       let book=new Book()
       user.id=userId
       book.id=bookId
       let loan =new Loan(create)
       loan.user= user
//       loan.book=book
       return  await loan.findLoan()
   }

}
