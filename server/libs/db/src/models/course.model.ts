/*
 * @Date: 2020-04-22 16:44:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 17:05:23
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

    // itemsRef是给Mongoose用的，用字符串保险一点
    @arrayProp({itemsRef: 'Episode'})
    episodes:Ref<Episode>[]
}