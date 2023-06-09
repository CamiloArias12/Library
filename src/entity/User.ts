import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Repository, PrimaryColumn, Relation, } from "typeorm"
import { AppDataSource } from "../data-source.js"
import  type { IUser } from "../interfaces/IUser.js"
import  Loan from "./Loan.js"


@ObjectType("User")
@Entity()

export default  class User implements IUser{
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


   @Field()
   @Column({default:true})
   rol:boolean

   @Field()
   @Column({default:true})
   isActive:boolean
    

    @OneToMany(() => Loan, (loan) => loan.user)
    loans: Relation<Loan>[]

   constructor(params?: IUser){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(User)
   }


   async createUser(): Promise <User | null>{
       return await this.repository.save(this);
   }

   async findUser(): Promise <User | null>{
      return await this.repository.findOneBy({id: this.id});
   }
   
   async findUserAll(): Promise<User[] | null> {

      try {
	 return await this.repository.find();
      } catch (error) {
	 console.error('Error fetching users:', error);
      return null;
      }
   }

   async validateUser():Promise <User | null> {
      const user= await this.repository.findOneBy({email:this.email ,password :this.password })
      return user ;
   }

}

