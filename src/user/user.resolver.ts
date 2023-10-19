import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import { User as PrismaUser } from '@prisma/client';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<PrismaUser[]> {
    return await this.userService.findAll();
  }

  @Query(() => User)
  async getUserById(@Args('id') id: number): Promise<PrismaUser> {
    return await this.userService.findById(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('username') username: string,
  ): Promise<PrismaUser> {
    const newUser = { email, username };
    return await this.userService.create(newUser);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('email', { nullable: true }) email?: string,
    @Args('username', { nullable: true }) username?: string,
  ): Promise<PrismaUser> {
    const updatedFields = { email, username };
    return await this.userService.update(id, updatedFields);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: number): Promise<PrismaUser> {
    return await this.userService.delete(id);
  }
}
