import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {
  }

  @Post("/authorize")
  async authorize(@Body() req: any) {
    return this.authService.authorize(req);
  }
}