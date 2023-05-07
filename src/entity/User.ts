import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm"
import {AppDataSource}  from "../data-source.js"
import {Field, ID, ObjectType} from "type-graphql"


@ObjectType("UserType")
@Entity()
export class User implements IUser {

   private repository :Repository<User>
   
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    age: number

   constructor (params?: IUser){
      Object.assign(this,params)
      this.repository= AppDataSource.getRepository(User)

   }

   async createUser(): Promise<String>{
    await this.repository.save(this);
    return "Operation succesfull"
   }

}


export interface IUser{
   id?: number
   firstName:string
   lastName:string
   age:number

}
