import { Field, ObjectType } from 'type-graphql';
import {Repository, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import type { Relation } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import type { IBook } from '../interfaces/IBook.js';
import  Author  from './Author.js';
import  Loan  from './Loan.js';

@ObjectType("Book")
@Entity()
export default class Book {

   private repository: Repository<Book>

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  publisher: string;

  @Field()
  @Column()
  area: string;

  @Field()
  @Column({ nullable: true })
  coverUrl: string;

  @Field()
  @Column({ nullable: true })
  digitalUrl: string;

  @Field()
  @Column({default:false})
  physicalAvailability: boolean;

  @ManyToMany(() => Author )
  @JoinTable()
  bookAuthors: Author[] | null;


   @OneToMany(() => Loan, (loan) => loan.books)
     loans: Relation <Loan>[];

   constructor(params?: IBook){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Book)
   }


   async createBook(): Promise <void>{
       await this.repository.save(this);
   }

   async findBook(): Promise <Book| null>{
      return await this.repository.findOneBy({id: this.id});
   }


}

