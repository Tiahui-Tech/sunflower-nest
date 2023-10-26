import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from 'src/@generated/user/user.model';
import { Gender} from '@prisma/client';
import { StringFieldUpdateOperationsInput } from 'src/@generated/prisma/string-field-update-operations.input';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { nullable: true })
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  async getUserById(@Args('id') id: number): Promise<User> {
    return await this.userService.findById(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('username') username: string,
    @Args('avatarURL') avatarURL: string,
    @Args('gender') gender: Gender,
  ): Promise<User> {
    const newUser = { email, username, avatarURL, gender };
    return await this.userService.create(newUser);
  }

  @Mutation(() => User, { nullable: true })
  async updateUser(
    @Args('id') id: number,
    @Args('email', { nullable: true }) email?: StringFieldUpdateOperationsInput,
    @Args('username', { nullable: true }) username?: StringFieldUpdateOperationsInput,
  ): Promise<User> {
    const updatedFields = { email, username };
    return await this.userService.update(id, updatedFields);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number): Promise<User> {
    return await this.userService.delete(id);
  }
}
