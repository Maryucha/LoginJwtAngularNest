import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

/**
 * This class represents a module main
 */
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    
    UserModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
