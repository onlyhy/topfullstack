/*
 * @Date: 2020-04-22 16:44:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-05 16:57:29
 */
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Course {
    @ApiProperty({description:"课程名称"})
    @prop()
    name: string

    @ApiProperty({ description: "封面图"})
    @prop()
    cover: string

}