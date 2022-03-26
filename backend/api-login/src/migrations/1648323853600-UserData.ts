import { User } from "src/user/entities/user.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class UserData1648323853600 implements MigrationInterface {

    

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userTemp ={
            password: 'Uxa123', salt: await bcrypt.genSalt()
        }
         const user = await queryRunner.manager.save(
       
        queryRunner.manager.create<User>(User, {
            name: 'Maryucha',
            email: 'mym@certi.org.br',
            password: await this.hashPassword(userTemp.password, userTemp.salt),
            role: 'ADMIN',
            status: true,
            salt: userTemp.salt,
            confirmationToken: crypto.randomBytes(32).toString('hex')
        }),
        );
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM \`user\``);
    }

}
