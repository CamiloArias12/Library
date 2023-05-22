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
import User from "../entity/User.js";
import { UserInput, UserInputPassword } from "../input/UserInput.js";
let UserResolver = class UserResolver {
    async users(userId) {
        let user = new User();
        console.log("asjkfasdkjf");
        user.id = userId;
        return await user.findUser() ?? null;
    }
    async userCreate(create) {
        console.log("Hello");
        const user = new User(create);
        if (await user.findUser() === null) {
            await user.createUser();
            return await user.findUser();
        }
        else {
            return null;
        }
    }
    async userValidate(userInput) {
        const user = new User();
        console.log(userInput);
        user.email = userInput.email;
        user.password = userInput.password;
        return await user.validateUser();
    }
};
__decorate([
    Query(() => User),
    __param(0, Arg('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    Mutation(() => User),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userCreate", null);
__decorate([
    Mutation(() => User),
    __param(0, Arg("login")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInputPassword]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userValidate", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
//# sourceMappingURL=UserResolver.js.map