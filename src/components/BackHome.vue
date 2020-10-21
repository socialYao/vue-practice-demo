<template>
  <div>
    <router-link to="/selectDemo"><button>&lt; 回主页</button></router-link>
  </div>
</template>

<script>
export default {
  name: "BackHome",
};
</script>

<style scoped>
button {
  background: #9d2933;
  border: none;
  outline: none;
  padding: 5px 10px;
  color: #fff;
  white-space: pre-wrap;
  margin-top: 10px;
  cursor: pointer;
}
</style>