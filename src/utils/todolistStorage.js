export default{
	readTodolist:function(){
		return JSON.parse(localStorage.getItem('todolist') || '[]');
	},
	saveTodolist:function(todolist){
		localStorage.setItem('todolist',JSON.stringify(todolist));
	}
}