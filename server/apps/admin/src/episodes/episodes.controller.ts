import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from '@libs/db/models/episode.model';

// 一个课程里面有很多课时
@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
   constructor(
        // 注入模型
       @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
    ) { } 
}

