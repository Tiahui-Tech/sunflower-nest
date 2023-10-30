import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { User } from './models/user.model'; 
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<User> {
    const user = await this.findById(id);
    if (user) {
      await this.prisma.user.delete({ where: { id } });
    } else {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}
