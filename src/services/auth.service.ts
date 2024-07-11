import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService
  ) {
  }

  authorize(user: any): object {
    const payload = { userid: 0, username: user.username };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}