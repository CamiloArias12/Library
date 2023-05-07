import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source.js";
//import { UserResolver} from "./resolvers/UserResolver.js";
import { AuthorResolver} from "./resolvers/AuthorResolvers.js";
import {BookResolver} from './resolvers/BookResolvers.js'
import { LoanResolver } from "./resolvers/LoanResolver.js";
import { UserResolver } from "./resolvers/UserResolver.js";
await AppDataSource.initialize()


const schema = await  buildSchema ({
   resolvers :[UserResolver,LoanResolver],
   validate: {forbidUnknownValues: false}
})


const server =new ApolloServer({
   schema: schema,
})


const {url} = await startStandaloneServer(server,{
      listen:{port:8080}

})


console.log(url)
