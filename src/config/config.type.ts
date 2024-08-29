export type ConfigType = {
  app: AppConfig;
  postgres: PostgresConfig;
  redis: RedisConfig;
  sentry: SentryConfig;
  jwt: JWTConfig;
};
export type AppConfig = {
  port: number;
  host: string;
};

export type PostgresConfig = {
  port: number;
  host: string;
  user: string;
  password: string;
  dbName: string;
};
export type RedisConfig = {
  port: number;
  host: string;
  password: string;
};
export type SentryConfig = {
  dsn: string;
  env: string;
  debug: boolean;
};
export type JWTConfig = {
  accessSecret: string;
  accessExpiresIn: number;
  refreshSecret: string;
  refreshExpiresIn: number;
};
