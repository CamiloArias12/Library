import  User  from './User.js';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Repository } from 'typeorm';
import  Book  from './Book.js';
import type { ILoan } from '../interfaces/ILoan.js';
import { AppDataSource } from '../data-source.js';
import { Field, ObjectType } from 'type-graphql';
@ObjectType("Loan")
@Entity()
export default class Loan {

   private repository: Repository<Loan>
  @Field() 
  @PrimaryGeneratedColumn()
  id: number;


  @Field()
  @Column()
  startDate: Date;

  @Field()
  @Column()
  returnDate: Date;

  @Field()
  @Column()
  returned: boolean;

  @ManyToOne(() => User, (user) => user.loans)
   user: User;

 // @ManyToOne(() => Book, (book) => book.loans)
 //  book: Book;

   constructor(params?: ILoan){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Loan)
   }


   async createLoan(): Promise <void>{
       await this.repository.save(this);
   }

   async findLoan(): Promise <Loan | null>{
      return await this.repository.findOneBy({id: this.id});
   }


}

