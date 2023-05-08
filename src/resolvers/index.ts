import {UserResolver} from "./UserResolver.js";
import {AuthorResolver} from "./AuthorResolvers.js";
import {BookResolver} from "./BookResolvers.js";
import {LoanResolver} from "./LoanResolver.js";
import { NonEmptyArray } from "type-graphql";


const resolvers : NonEmptyArray<any>=[
   LoanResolver,
   BookResolver,
   AuthorResolver,
   UserResolver
]

export {resolvers}
