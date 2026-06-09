
import { registerAs } from '@nestjs/config';
import { IsNotEmpty, IsString } from 'class-validator';
import { validateConfig } from '../validations/env.validate';

class DatabaseVariables {
  @IsNotEmpty()
  @IsString()
  host: string;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  port: string;
}

export default registerAs('database-config', () => {
  const config: DatabaseVariables = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  };
  return validateConfig(DatabaseVariables, config);
});
