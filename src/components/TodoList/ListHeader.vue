<template>
	<div class="w-header">
		<input class="inputbox" type="text" placeholder="请输入今天的任务清单,按回车键确认" v-model="taskData" @keyup.enter="addTaskData"/>
	</div>
</template>

<script>
	export default{
		name: "ListHeader",
		data(){
			return{
				taskData: "", //输入框的内容
			}
		},
		methods:{
			addTaskData(){
				this.$emit('addTaskData',this.taskData);
				this.taskData = "";
			},
		},
	}
</script>

<style scoped>
	.w-header{
		font-size: 16px;
		color: #333;
	}
	input,
	label{
		cursor: pointer;
	}
	.w-header .inputbox{
		width: 100%;
		height: 40px;
		box-sizing: border-box;
		display: block;
		padding-left: 10px;
		outline: none;
		border: 1px solid #ddd;
		border-radius: 4px;
	}
</style>
