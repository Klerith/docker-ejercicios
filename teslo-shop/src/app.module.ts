import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { MessagesWsModule } from './messages-ws/messages-ws.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      // ssl: process.env.STAGE === 'prod',
      // extra: {
      //   ssl: process.env.STAGE === 'prod'
      //         ? { rejectUnauthorized: false }
      //         : null,
      // },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,      
      autoLoadEntities: true,
      synchronize: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    ProductsModule,

    CommonModule,

    SeedModule,

    FilesModule,

    AuthModule,

    MessagesWsModule,

  ],
})
export class AppModule {
  constructor() {
    console.log( "APP_VERSION: "+ process.env.APP_VERSION )
    console.log( "STAGE: "+ process.env.STAGE )
    console.log( "DB_PASSWORD: "+ process.env.DB_PASSWORD )
    console.log( "DB_NAME: "+ process.env.DB_NAME )
    console.log( "DB_HOST: "+ process.env.DB_HOST )
    console.log( "DB_PORT: "+ process.env.DB_PORT )
    console.log( "DB_USERNAME: "+ process.env.DB_USERNAME )
    console.log( "PORT: "+ process.env.PORT )
    console.log( "HOST_API: "+ process.env.HOST_API )
    console.log( "JWT_SECRET: "+ process.env.JWT_SECRET )
  }
}
