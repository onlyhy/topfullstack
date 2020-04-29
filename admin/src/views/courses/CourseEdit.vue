<!--
 * @Date: 2020-04-28 14:08:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-29 16:01:40
 -->
<template>
  <div>
    <h3>{{isNew?'创建':'编辑'}}课程</h3>
    <ele-form
    :form-data="data"
    :form-desc="fields"
    ></ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!: string;

  data = {};

  // get表示把这个方法当成属性来用
  get isNew() {
    return !this.id;
  }

  fields = {
    name: { label: "课程名称",type:"input" },
    cover: { label: "课程封面图",type:"input" }
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