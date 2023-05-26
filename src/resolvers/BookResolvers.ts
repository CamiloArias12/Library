import { Resolver, Query,Mutation, Arg, Int } from "type-graphql";
import  Book  from "../entity/Book.js";
import {GraphQLError}from "graphql"
import { BookInput} from "../input/BookInput.js";
import  Author  from "../entity/Author.js";


@Resolver(Book)
export class BookResolver{

   @Query(()=> [Book])
   async getAllBook(){
      let book = new Book()
      return await book.findBooks()
   }


   @Mutation(() => Book, { nullable: true })
   async bookCreate(@Arg("create") create: BookInput,
		    @Arg("authors", () => [Int])authorIds: number[]
		   ) {
      let book: Book | null = new Book(create);
      let author=new Author()
      let authors:Author []=[] 
      authors= await author.findAuthors(authorIds) 

      book.bookAuthors= authors 
      await book.createBook();
      return await book.findBook();
   }

}
