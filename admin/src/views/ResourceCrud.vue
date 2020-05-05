<!--
 * @Date: 2020-04-28 14:08:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-05 15:10:35
 -->
<template>
  <div>
    <!-- v-if条件加上防止在option还没有获取到数据的时候报错 -->
    <avue-crud
      v-if="option.column"
      :page.sync="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource: string;
  data: any = {};
  option: any = {};
  // 配置分页参数
  page: any = {
    //pageSize: 2,
    // 可选择每页几条
    //pageSizes: [2, 5, 10],
    total: 0
  };
  query: any = {
    // sort:{_id:-1}
  };
  // 获取配置
  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  //传来的page参数里面有currentPage和pageSize，解构赋值
  async changePage({ pageSize, currentPage }) {
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        // 这里要注意prop要加括号，不加括号就是写死的prop，加了括号就是具体的要排序的列了
        [prop]: order === "ascending" ? 1 : -1
      };
    }
    this.fetch();
  }

  async search(where, done) {
    done();
    // 模糊查询，根据在定义模型的时候属性有没加regex为true来判断是否要用模糊查询
    for (let k in where) {
      const field = this.option.column.find(v => v.prop === k);
      if (field.regex) {
        where[k] = { $regex: where[k] };
      }
    }
    this.query.where = where;
    this.fetch();
  }

  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    });
    this.page.total = res.data.total;
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