<template>
	<div class="w-footer">
		<div class="total">
			<div class="checkall">
				<input type="checkbox" v-model="finishedAll" :disabled="todolist.length===0" id="sumcheck"/>
				<label for="sumcheck">已完成{{finishedNum}}件 / 总计{{todolist.length}}件</label>
			</div>
			<button class="removeall" @click="$emit('removeFinished')">清除已完成任务</button>
		</div>
	</div>
</template>

<script>
	export default{
		name: "ListFooter",
		props:{
			todolist: Array
		},
		data(){
			return{
				
			}
		},
		computed:{
			/**
			 * 监听有多少任务是已经完成了的
			 */
			finishedNum:function(){
				return this.todolist.reduce((total,todo)=>{
					return total+(todo.finished?1:0);
				},0);
			},
			/**
			 * 监听全选和反选
			 */
			finishedAll:{
				get: function () {
					var x = this.todolist.filter(v=>v.finished===true);
					if(this.todolist.length===0){
						return false;
					}
					if(x.length===this.todolist.length){
						return true;
					}else{
						return false;
					}
				},
				set:function(value){
					if(value){
						this.todolist.map((v)=>{
							v.finished = true;
						});
					}else{
						this.todolist.map((v)=>{
							v.finished = false;
						});
					}
				}
			}
		},
		methods:{
		}
	}
</script>

<style scoped>
	.w-footer{
		font-size: 16px;
		color: #333;
	}
	input,
	label{
		cursor: pointer;
	}
	.w-footer .total{
		width: 100%;
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.w-footer .total .checkall input{
		margin-right: 10px;
		margin-left: 10px;
	}
	
	.w-footer .total .removeall{
		width: 150px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #815476;
		color: #fff;
		border-radius: 10px;
		outline: none;
		border: none;
		cursor: pointer;
		font-size: 16px;
		transition: all 0.2s;
	}
	.w-footer .total .removeall:hover{
		background-color: #a57098;
	}
</style>
