<template>
	<div>
		<div class="tips">
			todolist 是一个用来记录待办事项的工具。简化版用于练习vue，实现了浏览器本地永久数据缓存。
			主要练习组件之间传值，传事件。将整个页面划分为三个组件。
		</div>
		<BackHome />
		<div class="wrap">
			<ListHeader @addTaskData="addTaskItem" />
			<ListContent :todolist="todolist" @delTaskItem="delTaskItem"/>
			<ListFooter :todolist="todolist" @removeFinished="removeFinished"/>
		</div>
	</div>
</template>

<script>

import BackHome from "@/components/BackHome.vue";
import ListHeader from "@/components/TodoList/ListHeader.vue";
import ListContent from "@/components/TodoList/ListContent.vue";
import ListFooter from "@/components/TodoList/ListFooter.vue";
import localStorageUtil from "@/utils/todolistStorage.js";
export default{
	name: "TodoList",
	components:{
		BackHome,
		ListHeader,
		ListContent,
		ListFooter
	},
	data(){
		return{
			todolist: localStorageUtil.readTodolist(),
		}
	},
	watch:{
		todolist:{
			handler: localStorageUtil.saveTodolist,
			deep: true,
			immediate: true
			
		}
	},
	methods:{
		/**
		 * 删除任务清单的数据
		 */
		delTaskItem:function(index){
			this.todolist.splice(index,1);
		},
		/**
		 * 添加任务清单的数据
		 */
		addTaskItem:function(content){
			if(content.trim()==''){
				alert('请输入内容');
				return;
			}
			var temp = {
				item: content,
				finished: false
			};
			this.todolist.unshift(temp);
		},
		/**
		 * 清除所有的已完成的任务
		 */
		removeFinished:function(){
			this.todolist = this.todolist.filter(v=>{
				return v.finished===false;
			});
		},
	},
}
</script>

<style scoped>
.wrap{
	width: 600px;
	border: 1px solid #ddd;
	border-radius: 4px;
	padding: 10px;
	margin: 0 auto;
	font-size: 16px;
	color: #333;
}
input,
label{
	cursor: pointer;
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
