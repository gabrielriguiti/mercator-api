import { Module } from "@nestjs/common";
import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "../config/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "c643de456983930eb07e5bc8c052d1788cd15437c046ebc6ece99df2b5aaa97b",
      signOptions: { expiresIn: "60m" }
    })
  ],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {
}