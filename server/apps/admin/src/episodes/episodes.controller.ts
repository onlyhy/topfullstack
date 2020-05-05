import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Episode } from '@libs/db/models/episode.model';
import { Course } from '@libs/db/models/course.model';

// 一个课程里面有很多课时
@Crud({
    model: Episode
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    constructor(
        // 注入模型
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
    ) { }

    @Get('option')
    async option() {
        // 查出所有课程的数据，给课时绑定使用
        const courses = (await this.courseModel.find()).map(v => ({
            label: v.name,
            value: v._id
        }))
        return {
            title: '课时管理',
            // 去掉会avue会出现的$course！！
            translate: false,
            column: [
                { prop: 'course', label: '所属课程', type: 'select', dicData: courses, row: true },
                { prop: 'name', label: '课时名称', span: 24 },
                { prop: 'file', label: '视频文件', span: 24, width: 120, listType: 'picture-img',type: 'upload', action: '/upload' },
            ]
        }
    }
}

