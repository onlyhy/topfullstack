import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import {ConfigModule} from '@nestjs/config'
import { DbModule } from '@libs/db';

@Module({
  imports:[
    // 表示ConfigModule在任意位置都可以使用,用来全局导入.env的东西
    // 要想用到.env的东西，子项目的module记得要引入CommonModule
    ConfigModule.forRoot({
      isGlobal:true
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
