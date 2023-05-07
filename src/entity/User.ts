import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Repository, PrimaryColumn, } from "typeorm"
import { AppDataSource } from "../data-source.js"
import  type { IUser } from "../interfaces/IUser.js"
import  Loan from "./Loan.js"
@Entity()
@ObjectType("User")
export default class User {
   private repository: Repository<User>

    @Field()
    @PrimaryColumn()
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    phone:string

    @Field()
    @Column()
    address:string

    @Field()
    @Column({unique: true})
    email:string
   
    @Field()
    @Column()
    password: string

   @OneToMany(() => Loan, (loan) => loan.user)
   loans: Loan[];

   constructor(params?: IUser){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(User)
   }


   async createUser(): Promise <void>{
       await this.repository.save(this);
   }

   async findUser(): Promise <User | null>{
      return await this.repository.findOneBy({id: this.id});
   }

}

