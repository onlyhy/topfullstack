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
    return {
      url:`http://localhost:3000/uploads/${file.filename}`
    }
  }
}
