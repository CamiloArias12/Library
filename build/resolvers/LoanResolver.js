var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Loan from "../entity/Loan.js";
import { LoanInput } from "../input/LoanInput.js";
import User from "../entity/User.js";
import Book from "../entity/Book.js";
let LoanResolver = class LoanResolver {
    async loan(authorId) {
        let loan = new Loan();
        loan.id = authorId;
        return await loan.findLoan();
    }
    async loanCreate(create, userId, bookId) {
        let user = new User();
        let book = new Book();
        user.id = userId;
        book.id = bookId;
        let loan = new Loan(create);
        loan.user = user;
        //       loan.book=book
        return await loan.findLoan();
    }
};
__decorate([
    Query(() => Loan),
    __param(0, Arg('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loan", null);
__decorate([
    Mutation(() => Loan),
    __param(0, Arg("create")),
    __param(1, Arg("userId")),
    __param(2, Arg("bookId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoanInput, Number, Number]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanCreate", null);
LoanResolver = __decorate([
    Resolver(Loan)
], LoanResolver);
export { LoanResolver };
//# sourceMappingURL=LoanResolver.js.map