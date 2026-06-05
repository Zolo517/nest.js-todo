import { registerAs } from '@nestjs/config';
import { IsNotEmpty, IsString } from 'class-validator';
import { validateConfig } from '../validations/env.validate';


class JwtVariables {
  @IsNotEmpty()
  @IsString()
  secret: string;
}

export default registerAs('jwt', () => {
  return validateConfig(JwtVariables, {
    secret: process.env.JWT_SECRET,
  });
});
