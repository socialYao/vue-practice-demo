<template>
	<div class="w-content">
		<ul class="datalist" v-if="todolist.length>0">
			<li v-for="(item,index) in todolist" :key="todolistKeys[index]" @mouseenter="delDelBtn(index,true)" @mouseleave="delDelBtn(index,false)">
				<div>
					<input type="checkbox" v-model="item.finished" :id="`checkbox${index}`">
					<label :for="`checkbox${index}`">{{item.item}}</label>
				</div>
				<button class="delbtn" :ref="'delbtn'+index" @click="$emit('delTaskItem', index)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import shortId from "shortid";
	export default{
		name: "ListContent",
		props:{
			todolist:Array
		},
		data(){
			return{
				todolistKeys:[],  //生成key值
			}
		},
		mounted(){
			this.todolistKeys = this.todolist.map(()=>shortId.generate());  //自动生成唯一的key
		},
		methods:{
			/**
			 * 控制删除按钮的显示
			 * */
			delDelBtn(index,isShowdel){
				var button = this.$refs['delbtn'+index];
				if(isShowdel){
					button[0].style.display = "block";
				}else{
					button[0].style.display = "none";
				}
			},
		},
	}
</script>

<style scoped>
	.w-content{
		font-size: 16px;
		color: #333;
	}
	input,
	label{
		cursor: pointer;
	}
	.w-content .datalist{
		width: 100%;
		border: 1px solid #ddd;
		border-radius: 4px;
		list-style: none;
		padding: 0;
	}
	.w-content .datalist>li{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		padding-left: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.w-content .datalist>li:hover{
		background-color: #f5f5f5;
	}
	.w-content .datalist>li .delbtn{
		padding: 6px 10px;
		background-color:  #815476;
		color: #fff;
		border-radius: 4px;
		margin-right: 10px;
		cursor: pointer;
		border: none;
		outline: none;
		font-size: 16px;
		display: none;
	}
	.w-content .datalist>li .delbtn:hover{
		background-color: #a57098;
	}
	.w-content .datalist>li:last-of-type{
		border-bottom: none;
	}
	.w-content .datalist>li input[type=checkbox]{
		margin-right: 8px;
	}
</style>
