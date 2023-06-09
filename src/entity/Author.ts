import { Field, ObjectType } from 'type-graphql';
import {Repository, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, In } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import type { IAuthor } from '../interfaces/IAuthor.js';
import  Book  from './Book.js';

@ObjectType("Author")
@Entity()
export default class Author {
   private repository: Repository<Author>
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;
  

  @Field()
  @Column()
  nationality: string;

  @Field()
  @Column()
  biography: string;


  @ManyToMany(() => Book)
  bookAuthors: Book[];


   constructor(params?: IAuthor){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Author)
   }


   async createAuthor(): Promise <void>{
       await this.repository.save(this);
   }

   async findAuthor(): Promise <Author | null>{
      return await this.repository.findOneBy({id: this.id});
   }

    async findAuthorsAll(): Promise <Author[] | null>{
      return await this.repository.find();
   }

   async findAuthors(authors:number[]): Promise <Author[]>{
      return await this.repository.find(
	 {where: {id : In(authors)}} 
      );
   }
   async deleteAuthor(): Promise<Boolean>{
	  return await this.repository.delete({id:this.id}).then(()=>{
		  console.log("book delete")
		  return true
	       }).catch((error)=>{ 
		  console.log(error)
		  return false})

   }


}

