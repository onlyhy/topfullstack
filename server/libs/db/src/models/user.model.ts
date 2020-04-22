/*
 * @Date: 2020-04-22 16:44:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 16:46:01
 */
import { prop } from '@typegoose/typegoose'
export class User {
    @prop()
    username: string
    @prop()
    password: string
}