import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  Author  from "../entity/Author.js";
import {GraphQLError}from "graphql"
import { UserInput } from "../input/UserInput.js";
import { AuthorInput } from "../input/AuthorInput.js";


@Resolver(Author)
export class AuthorResolver{

   @Query(()=> [Author])
   async getAllAuthor(){
      let author = new Author()
      return await author.findAuthorsAll()
   }


   @Query(()=> Author)
   async author( @Arg('authorId')authorId: number){
      console.log("hello")
      let author = new Author()
      author.id= authorId
      return await author.findAuthor()
   }

   @Mutation(()=> Author) 
   async authorCreate(@Arg("create") create: AuthorInput ){
      let author: Author | null =new Author(create)
	 await author.createAuthor()
      return await author.findAuthor()

   }

}
