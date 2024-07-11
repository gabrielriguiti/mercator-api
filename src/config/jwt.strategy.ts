import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "c643de456983930eb07e5bc8c052d1788cd15437c046ebc6ece99df2b5aaa97b"
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
