import { Resolver, Query,Mutation, Arg, UseMiddleware } from "type-graphql";
import  Loan from "../entity/Loan.js";
import {GraphQLError}from "graphql"
import { LoanInput, LoanInputUpdate } from "../input/LoanInput.js";
import  User  from "../entity/User.js";
import  Book  from "../entity/Book.js";


@Resolver(Loan)
export class LoanResolver{

   @Query(()=> [Loan])
   async getAllLoan(){
      let loan= new Loan()
      return await loan.findLoans()
   }
   
   @Query(()=> [Loan])
   async getAllLoanUser(@Arg("id")id:number){
      let loan= new Loan()
      let user= new User()
      user.id=id
      loan.user=user
      return await loan.findLoanUser()
   }

   @Query(()=> Loan)
   async loan( @Arg('loanId')loanId: number){
      let loan = new Loan()
      loan.id=loanId 
      return await loan.findLoan()
   }
    @Query(()=> Boolean)
      async loanDelete( @Arg('loanId')authorId: number):Promise <Boolean>{
      let loan = new Loan()
      loan.id= authorId
      return await loan.deleteLoan()
   }

   @Mutation(()=> Loan) 
   async loanCreate(@Arg("create") create: LoanInput){

       let user =new User()
       let book=new Book()
       user.id=create.userId
       book.id=create.bookId
       let loan =new Loan(create)
       loan.user= user
       loan.books=book
	 await loan.createLoan()
       return  await loan.findLoan()
   }

    @Mutation(()=> Loan) 
      async loanUpdate(@Arg("update") update: LoanInputUpdate){
	 
       let book=new Book()
       book.id=update.bookId
       let loan =new Loan(update)
       loan.id=update.id
       loan.returned=update.returned
       loan.books=book
       console.log(update)
	 await loan.createLoan()
       return  await loan.findLoan()
   }

}
