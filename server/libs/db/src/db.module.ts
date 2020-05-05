import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([User,Course,Episode])

@Global()
@Module({
  imports:[
    // 这里要用异步初始化的方法,才能读到process.env
    TypegooseModule.forRootAsync({
      useFactory(){
        return{
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
        }
      }
    }),
    // TypegooseModule.forRoot(process.env.DB,{
    //   useNewUrlParser:true,
    //   useUnifiedTopology:true,
    //   useCreateIndex:true,
    //   useFindAndModify:false
    // }),
    models,
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
