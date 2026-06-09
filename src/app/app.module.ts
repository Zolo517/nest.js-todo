import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TodosModule } from './modules/todos/todos.module';

@Module({
  imports: [UsersModule, AuthModule, TodosModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
=======
import { UsersModule } from '@/modules/users/users.module';
import { AuthModule } from '@/modules/auth/auth.module';

@Module({
  imports: [ UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 37940b5 (fixed conflict)
})
export class AppModule {}
