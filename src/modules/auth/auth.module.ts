import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { RedisModule } from '../redis/redis.module';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { AuthCacheService } from './services/auth-cache.service';
import { TokenService } from './services/token.service';

@Module({
  imports: [JwtModule, RedisModule, UsersService],
  controllers: [AuthController],
  providers: [AuthService, TokenService, AuthCacheService],
})
export class AuthModule {}
