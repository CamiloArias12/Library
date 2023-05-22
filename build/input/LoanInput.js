var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { InputType, Field, } from "type-graphql";
let LoanInput = class LoanInput {
    id;
    startDate;
    returnDate;
    returned;
    userId;
    bookId;
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], LoanInput.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], LoanInput.prototype, "startDate", void 0);
__decorate([
    Field(),
    __metadata("design:type", Date)
], LoanInput.prototype, "returnDate", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], LoanInput.prototype, "returned", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], LoanInput.prototype, "userId", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], LoanInput.prototype, "bookId", void 0);
LoanInput = __decorate([
    InputType()
], LoanInput);
export { LoanInput };
//# sourceMappingURL=LoanInput.js.map