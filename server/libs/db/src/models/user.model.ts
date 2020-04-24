/*
 * @Date: 2020-04-22 16:44:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 16:11:14
 */
import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User {
    @ApiProperty({description:"用户名",example: 'user1'})
    @prop()
    username: string

    @ApiProperty({ description: "密码",example:'pass1' })
    @prop()
    password: string
}