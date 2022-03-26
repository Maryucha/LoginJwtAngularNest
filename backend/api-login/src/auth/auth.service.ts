import { Injectable, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserListItens } from 'src/user/dto/list-itens-user.dto';
import { UserRole } from 'src/user/dto/UserRole';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/users.repository';
import { CredentialsDto } from './CredentialsDto';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) { }

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      const user: UserListItens = createUserDto;
      console.log('cadastrado com realizado com sucesso');
      return await this.userRepository.createUser(user, UserRole.USER);
    }
  }
  
  async signIn(credentialsDto: CredentialsDto) {
    const user = await this.userRepository.checkCredentials(credentialsDto);

    if (user.email === null && user.email !== credentialsDto.email) {
      throw new UnauthorizedException('Email inválido!');
    }
    if(user.password === null && user.password !== credentialsDto.password){
      throw new UnauthorizedException('Problema com a senha!');
    }

    const jwtPayload = {
      id: user.id,
    };
    const token = await this.jwtService.signAsync(jwtPayload);
    console.log('login realizado com sucesso');
    return { token };
  }
}
