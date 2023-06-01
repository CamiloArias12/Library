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
import { LoanInput, LoanInputUpdate } from "../input/LoanInput.js";
import User from "../entity/User.js";
import Book from "../entity/Book.js";
let LoanResolver = class LoanResolver {
    async getAllLoan() {
        let loan = new Loan();
        return await loan.findLoans();
    }
    async getAllLoanUser(id) {
        let loan = new Loan();
        let user = new User();
        user.id = id;
        loan.user = user;
        return await loan.findLoanUser();
    }
    async loan(loanId) {
        let loan = new Loan();
        loan.id = loanId;
        return await loan.findLoan();
    }
    async loanDelete(authorId) {
        let loan = new Loan();
        loan.id = authorId;
        return await loan.deleteLoan();
    }
    async loanCreate(create) {
        let user = new User();
        let book = new Book();
        user.id = create.userId;
        book.id = create.bookId;
        let loan = new Loan(create);
        loan.user = user;
        loan.books = book;
        await loan.createLoan();
        return await loan.findLoan();
    }
    async loanUpdate(update) {
        let book = new Book();
        book.id = update.bookId;
        let loan = new Loan(update);
        loan.id = update.id;
        loan.returned = update.returned;
        loan.books = book;
        console.log(update);
        await loan.createLoan();
        return await loan.findLoan();
    }
};
__decorate([
    Query(() => [Loan]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "getAllLoan", null);
__decorate([
    Query(() => [Loan]),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "getAllLoanUser", null);
__decorate([
    Query(() => Loan),
    __param(0, Arg('loanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loan", null);
__decorate([
    Query(() => Boolean),
    __param(0, Arg('loanId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanDelete", null);
__decorate([
    Mutation(() => Loan),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoanInput]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanCreate", null);
__decorate([
    Mutation(() => Loan),
    __param(0, Arg("update")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoanInputUpdate]),
    __metadata("design:returntype", Promise)
], LoanResolver.prototype, "loanUpdate", null);
LoanResolver = __decorate([
    Resolver(Loan)
], LoanResolver);
export { LoanResolver };
//# sourceMappingURL=LoanResolver.js.map