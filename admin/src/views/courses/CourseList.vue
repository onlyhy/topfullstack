<!--
 * @Date: 2020-04-28 14:08:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-29 14:42:46
 -->
<template>
  <div>
    <h3>课程列表</h3>
    <el-table :data="data.data">
      <!-- 这里fields是一个对象，所以v-for里面的name代表的是键名 -->
      <el-table-column
        v-for="(field,name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
        :width="field.width"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CourseList extends Vue {
  data = {};
  fields = {
    _id: { label: "ID" },
    name: { label: "课程名称" },
    cover: { label: "课程封面图" }
  };

  async fetch() {
    const res = await this.$http.get("courses");
    this.data = res.data;
  }
  created() {
    this.fetch();
  }
}
</script>

<style>
</style>