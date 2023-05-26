import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Repository, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import  Book  from './Book.js';
import type { ILoan } from '../interfaces/ILoan.js';
import { AppDataSource } from '../data-source.js';
import { Field, ObjectType } from 'type-graphql';
import  User  from './User.js';

@ObjectType("Loan")
@Entity()
export default class Loan implements ILoan{

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

   @OneToMany(() => User, (user) => user.loans)
   user:Relation <User>;

   @ManyToOne(() => Book, (book) => book.loans)
   books: Relation< Book>[];

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

    async findLoans(): Promise <Loan[] | null>{
      return await this.repository.find();
      }

}

