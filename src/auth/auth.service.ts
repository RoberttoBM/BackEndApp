import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { Usuario } from './../user/model/user.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserName(username);
    if (user && user.CONTRPER === pass) {
      const { CONTRPER, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async mylogin( usr: string, pwd: string) {
    const user = await getRepository(Usuario)
      .createQueryBuilder()
      .select("user")
      .from(Usuario, "user")
      .where("user.USUPER = :usr", { usr})
      .andWhere("user.CONTRPER = :pwd", { pwd})
      .getOne();
    return user;
  }
}