import { prop, modelOptions } from "@typegoose/typegoose";

/*
 * @Date: 2020-04-24 16:47:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 16:54:42
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


}