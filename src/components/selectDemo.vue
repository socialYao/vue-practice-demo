<template>
  <div>
    <h1>vue练习Demo展示(点击查看效果)</h1>
    <div class="btngroup">
      <router-link to="/LocalSearch"><button>局部搜索</button></router-link>
      <router-link to="/LocalSort"><button>局部排序</button></router-link>
	  <router-link to="/TodoList"><button>TodoList</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectDemo",
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.btngroup {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #eee;
  padding: 10px 20px;
}
.btngroup button {
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 4px;
}
</style>