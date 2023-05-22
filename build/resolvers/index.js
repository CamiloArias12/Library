import { UserResolver } from "./UserResolver.js";
import { AuthorResolver } from "./AuthorResolvers.js";
import { BookResolver } from "./BookResolvers.js";
import { LoanResolver } from "./LoanResolver.js";
const resolvers = [
    LoanResolver,
    BookResolver,
    AuthorResolver,
    UserResolver
];
export { resolvers };
//# sourceMappingURL=index.js.map