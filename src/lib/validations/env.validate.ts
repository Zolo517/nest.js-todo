import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validateConfig<T extends object>(
  cls: ClassConstructor<T>,
  config: T,
) {
  const configInstance = plainToInstance(cls, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(configInstance, {
    whitelist: true,
  });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return configInstance;
}
