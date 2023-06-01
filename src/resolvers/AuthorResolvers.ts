import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  Author  from "../entity/Author.js";
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
      let author = new Author()
      author.id= authorId
      return await author.findAuthor()
   }
   @Query(()=> Boolean)
      async authorDelete( @Arg('authorId')authorId: number):Promise<Boolean>{
      let author = new Author()
      author.id= authorId
      return await author.deleteAuthor()
   }

   @Mutation(()=> Author) 
   async authorCreate(@Arg("create") create: AuthorInput ){
      let author: Author | null =new Author(create)
      if(await author.findAuthor()==null){
	 await author.createAuthor()
	 return await author.findAuthor()
      }else{
	 return null
      }
   }
   @Mutation(() => Author)
   async authorUpdate(@Arg("update") update: AuthorInput ){
      let author: Author | null =new Author(update)
	 await author.createAuthor()
	 return await author.findAuthor()
   }

}
