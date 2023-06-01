import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Repository, OneToMany, ManyToMany } from 'typeorm';
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
  @Column({default: false})
  returned: boolean;

   @ManyToOne(() => User, (user) => user.loans)
   user:Relation <User>;

   @ManyToOne(() => Book, (book) => book.loans)
   books: Relation< Book>;

   constructor(params?: ILoan){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Loan)
   }


   async createLoan(): Promise <void>{
       try {
    await this.repository.save(this);
    console.log("Loan saved successfully");
  } catch (error) {
    console.error("Error saving loan:", error);
  }
}

   async findLoan(): Promise <Loan | null>{
      return await this.repository.findOneBy({id: this.id});
   }

    async findLoans(): Promise <Loan[] | null>{
      return await this.repository.find();
      }
   async deleteLoan(): Promise<Boolean>{
	  return await this.repository.delete({id:this.id}).then(()=>{
		  return true
	       }).catch(()=>{ 
		  return false
	       })

   }

     async findLoanUser():Promise<Loan[] | null>{

      return await this.repository.find(
	{
	   where:{
	      user:{
		    id:this.user.id
	      } 
	   }
	}
      )
   }


}

