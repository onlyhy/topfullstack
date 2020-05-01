<!--
 * @Date: 2020-04-28 14:08:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-01 15:49:53
 -->
<template>
  <div>
    <!-- v-if条件加上防止在option还没有获取到数据的时候报错 -->
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource:string
  data = {};
  option = {};

  // 获取配置
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`);
    this.data = res.data;
  }
  // 新增
  async create(row, done, loading) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }
  // 修改
  async update(row, index, done, loading) {
    // 由于avue会添加一个$index属性，所以在更新前，拷贝一个新数据，把$index删去再执行请求
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }
  // 删除
  async remove(row) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      // 中断方法的执行
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }
  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style>
</style>