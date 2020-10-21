<template>
  <div class="localsearch">
    <div class="tips">
      所谓局部排序就是指在所有数据都已知的情况下，按照一定条件对所有的数据进行排序。在上一个案例的基础上进行改良的案例，按照年龄对用户数据进行排序。
      思路：
      1、设置一个sortType，用来表示排序类型，0--默认排序，1--升序排序，2--降序排序。
      2、然后在computed里面监听这个值，根据这个值对数据进行排序。
    </div>
    <BackHome />
    <h3>局部搜索+局部排序</h3>
    <input type="text" placeholder="请输入您要搜索的名字" v-model="searname" />
    <div class="sortbox">
      <a href="#" @click.prevent="sortFun(0)">默认排序</a>
      <a href="#" @click.prevent="sortFun(1)">年龄升序</a>
      <a href="#" @click.prevent="sortFun(2)">年龄降序</a>
    </div>
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
  name: "LocalSort",
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
      sortType: 0, //排序类型，0--默认排序，1--升序排序，2--降序排序
    };
  },
  computed: {
    //计算搜索出来的所有数据，默认是原来数据，实时搜索
    searchUser() {
      let { searname, userLists, sortType } = this;
      let arr = [...userLists];
      //去除头尾空格
      if (searname.trim()) {
        //查找任意和输入文字符合的数据，不区分大小写
        arr = userLists.filter(
          (u) => u.username.toLowerCase().indexOf(searname.toLowerCase()) !== -1
        );
      }
      //监听排序
      if (sortType) {
        arr.sort((a, b) => {
          if (sortType === 1) {
            return a.age - b.age;
          } else {
            return b.age - a.age;
          }
        });
      }
      return arr;
    },
  },
  methods: {
    /**
     * 排序点击事件  type: 0--默认，1--升序，2--降序
     */
    sortFun(type) {
      this.sortType = type;
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
.sortbox {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.sortbox > a {
  background: rgb(153, 148, 148);
  color: #fff;
  padding: 6px 20px;
  margin-left: 5px;
  display: block;
  cursor: ponter;
  text-decoration: none;
}
.tips {
  width: 1200px;
  margin: 20px auto 0 auto;
  border: 1px solid #222;
  padding:15px 20px;
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