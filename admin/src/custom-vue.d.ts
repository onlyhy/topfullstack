/*
 * @Date: 2020-04-29 15:11:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-29 15:11:33
 */
import Vue from 'vue'
import { AxiosInstance } from 'axios'

declare module 'vue/types/vue' {
    // 3. 声明为 Vue 补充的东西
    interface Vue {
        $http: AxiosInstance
    }
}