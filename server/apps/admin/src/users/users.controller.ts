import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';

@Crud({
// 指定是哪个模型
    model: User
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    // 注入模型到model属性上
    constructor(@InjectModel(User) private readonly model) {
        
    }
}
