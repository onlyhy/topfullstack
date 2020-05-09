import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from 'libs/common/src';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    CommonModule,
    // 因为要用env里的环境变量所以改成异步注册
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
            }
          })
        }
      }
    }),
    // MulterModule.register({
    //   //本地
    //   //dest:'uploads'
    // }), 
    UsersModule, CoursesModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
