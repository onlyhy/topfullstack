import { Controller, Get } from '@nestjs/common';
import { Course } from '@libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model:Course
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor(
        // 注入模型
        @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
    ){}

    @Get('option')
    option(){
        return{
            title: '课程管理',
            column: [
                { prop: 'name', label: '课程名称',sortable:true },
                { prop: 'cover', label: '课程封面图' }
            ]
        }
    }
}
