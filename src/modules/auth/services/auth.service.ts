import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoggerService } from '../../logger/logger.service';
import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { UsersService } from '../../users/users.service';
import { SignInReqDto } from '../dto/req/sign-in.req.dto';
import { SignUpReqDto } from '../dto/req/sign-up.req.dto';
import { AuthResDto } from '../dto/res/auth.res.dto';
import { AuthCacheService } from './auth-cache.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    //private readonly logger: LoggerService,
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService,
    private readonly userService: UsersService,
  ) {}
  public async singIn(dto: SignInReqDto): Promise<any> {}
  public async singUp(dto: SignUpReqDto): Promise<AuthResDto> {
    const password = await bcrypt.hash(dto.password, 10);

    const user = await this.userRepository.save(
      this.userRepository.create({ ...dto, password }),
    );
    const tokens = await this.tokenService.generateAuthTokens({
      userId: user.id,
      deviceId: dto.deviceId,
    });
    await Promise.all([
      await this.refreshTokenRepository.save({
        deviceId: dto.deviceId,
        refreshToken: tokens.refreshToken,
        user_id: user.id,
      }),
      await this.authCacheService.saveToken(
        tokens.accessToken,
        user.id,
        dto.deviceId,
      ),
    ]);

    return { user, tokens };
  }
}
