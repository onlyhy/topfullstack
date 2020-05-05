import { Controller, Get } from '@nestjs/common';
import { Course } from '@libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Course
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor(
        // 注入模型
        @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
    ) { }

    @Get('option')
    option() {
        return {
            // CRUD的表格要配置的列等option
            title: '课程管理',
            column: [
                // row为true这个字段会占一整行,也可通过ele的sapn来控制宽度
                // regex表示这个字段搜索用正则表达式搜索
                // action是图片上传地址
                { prop: 'name', label: '课程名称', sortable: true, search: true, regex: true, row: true },
                { prop: 'cover', label: '课程封面图', type: 'upload', width: 120, dataType: 'string', row: true, action: 'upload' }
            ]
        }
    }
}
