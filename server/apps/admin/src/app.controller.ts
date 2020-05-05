import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from '@nestjs/platform-express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  // file表示的是从前端请求里取的字段名就是file
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file) {
    return file 
    // 使用阿里云oss后不需要再定义url，它会自己生成
    //本地
    // return {
    //   url:`http://localhost:3000/uploads/${file.filename}`
    // }
  }
}
