import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3307,
      username: "user_blog",
      password: "root",
      database: "db_blog",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}