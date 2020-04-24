import { Controller } from '@nestjs/common';
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
}
