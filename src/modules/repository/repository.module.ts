import { Global, Module } from '@nestjs/common';
import { RefreshTokenRepository } from './services/refresh-token.repository';

//import { ArticleRepository } from './services/article.repository';
import { UserRepository } from './services/user.repository';

const repositories = [UserRepository, RefreshTokenRepository];

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: repositories,
  exports: repositories,
})
export class RepositoryModule {}
