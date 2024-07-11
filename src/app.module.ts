import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // Torna o módulo de configuração global
    }),
    AuthModule
  ]
})
export class AppModule {
}
