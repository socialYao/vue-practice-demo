<template>
  <div class="localsearch">
    <div class="tips">
      所谓局部搜索就是指在所有数据都已知的情况下，按照一定条件去搜索数据。
      思路：
      1、考虑到要实现的效果是一边搜一边展示结果，所以适合用computed来实现搜索结果。（computed可以实时监听属性的变化）
      2、一旦监听搜索值变化了就要修改渲染的结果。
      3、搜索之前要去除前后空格，要验证是否为空。toLowerCase()把英文大写都转成小写判断，这样就不区分大小写了。
    </div>
    <BackHome />
    <h3>局部搜索</h3>
    <input type="text" placeholder="请输入您要搜索的名字" v-model="searname" />
    <ul>
      <li v-for="(item, index) in searchUser" :key="item.id">
        {{ index + 1 }}、 姓名：{{ item.username }}，年龄：{{
          item.age
        }}，性别：{{ item.sex }}
      </li>
    </ul>
  </div>
</template>
<script>
import BackHome from "@/components/BackHome.vue";
export default {
  name: "LocalSearch",
  components: {
    BackHome,
  },
  data() {
    return {
      userLists: [
        { id: 1, username: "Kitty", age: 18, sex: "女" },
        { id: 2, username: "张三", age: 22, sex: "男" },
        { id: 3, username: "李四", age: 15, sex: "女" },
        { id: 4, username: "张三", age: 32, sex: "男" },
        { id: 5, username: "王五", age: 20, sex: "男" },
        { id: 6, username: "Kitty", age: 18, sex: "女" },
        { id: 7, username: "王六", age: 40, sex: "女" },
        { id: 8, username: "Kitty", age: 18, sex: "女" },
        { id: 9, username: "李四", age: 25, sex: "男" },
        { id: 10, username: "王五", age: 18, sex: "女" },
        { id: 11, username: "Kitty", age: 30, sex: "女" },
        { id: 12, username: "Kitty", age: 28, sex: "女" },
      ],
      searname: "",
    };
  },
  computed: {
    //计算搜索出来的所有数据，默认是原来数据，实时搜索
    searchUser() {
      let { searname, userLists } = this;
      let arr = [...userLists];
      //去除头尾空格
      if (searname.trim()) {
        //查找任意和输入文字符合的数据，不区分大小写
        arr = userLists.filter(
          (u) => u.username.toLowerCase().indexOf(searname.toLowerCase()) !== -1
        );
      }
      return arr;
    },
  },
};
</script>
<style scoped>
.localsearch h3 {
  text-align: center;
}
.localsearch input {
  display: block;
  margin: 0 auto;
}
.localsearch ul {
  list-style: none;
}
.localsearch ul li {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.tips {
  width: 1200px;
  margin: 20px auto 0 auto;
  border: 1px solid #222;
  padding: 15px 20px;
  white-space: pre-wrap;
  line-height: 26px;
  color: #999;
  position: relative;
}
.tips::before {
  content: "Tips";
  width: 50px;
  height: 20px;
  background-color: #fff;
  text-align: center;
  line-height: 20px;
  display: block;
  position: absolute;
  left: 20px;
  top: -10px;
}
</style>