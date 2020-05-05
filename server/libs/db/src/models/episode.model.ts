import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { Course } from "./course.model";

/*
 * @Date: 2020-04-24 16:47:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-05 17:39:42
 */

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Episode {
    @prop()
    name:string 
    
    @prop()
    file:string 
    
    // 表示该课时属于哪个课程
    //itemsRef是给Mongoose用的，用字符串保险一点
    // @arrayProp({ itemsRef: 'Episode' })
    // episodes: Ref<Episode>[]
    @prop({ref:'Course'})
    course:Ref<Course>
}