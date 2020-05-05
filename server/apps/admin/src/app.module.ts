import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [MulterModule.register({
    // 阿里云oss
    storage: MAO({
      config: {
        region: 'oss-cn-hangzhou.',
        accessKeyId: 'LTAI4GG6gE8YKAj9v35cfACu',
        accessKeySecret: 'RaTJISkmW9ge4m3G6ZB3kjMvozep61',
        bucket: 'topfullstackhy'
      }
    })
    //本地
    //dest:'uploads'
  }),DbModule, UsersModule, CoursesModule, EpisodesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
