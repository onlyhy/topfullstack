import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import {ConfigModule} from '@nestjs/config'
import { DbModule } from '@libs/db';

@Module({
  imports:[
    // 表示ConfigModule在任意位置都可以使用
    ConfigModule.forRoot({
      isGlobal:true
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
