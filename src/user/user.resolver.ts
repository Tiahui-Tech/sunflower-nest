import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User as UserModel } from './models/user.model';
import { Gender, User } from '@prisma/client';


@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserModel], { nullable: true })
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query(() => UserModel, { nullable: true })
  async getUserById(@Args('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('email') email: string,
    @Args('username') username: string,
    @Args('avatarURL') avatarURL: string,
    @Args('gender') gender: Gender,
  ): Promise<User> {
    const newUser = { email, username, avatarURL, gender };
    return await this.userService.create(newUser);
  }

  @Mutation(() => UserModel, { nullable: true })
  async updateUser(
    @Args('id') id: number,
    @Args('email', { nullable: true }) email?: string,
    @Args('username', { nullable: true }) username?: string,
  ): Promise<User> {
    const updatedFields = { email, username };
    return await this.userService.update(id, updatedFields);
  }

  @Mutation(() => UserModel)
  async deleteUser(@Args('id') id: number): Promise<User> {
    return await this.userService.delete(id);
  }
}
