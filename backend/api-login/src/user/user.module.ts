import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]),
  PassportModule.register({ defaultStrategy: 'jwt' }),],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
