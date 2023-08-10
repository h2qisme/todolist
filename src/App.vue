<!--
 * @Author: h2qisme 874175299@qq.com
 * @Date: 2023-08-07 10:51:40
 * @LastEditors: h2qisme 874175299@qq.com
 * @LastEditTime: 2023-08-10 11:00:41
 * @FilePath: \vue_test\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
			<MyHeader :addTodo="addTodo"></MyHeader>
			<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
			<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
			</div>
		</div>
	</div>	
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				todos:[
					{id:'0001',title:'吃饭',done:true},
					{id:'0002',title:'睡觉',done:false},
					{id:'0003',title:'喝酒',done:true},
					{id:'0004',title:'打游戏',done:false}
				]
			}
		},
		methods: {
			// 添加一个todo
			addTodo(todoObj){
				this.todos.unshift(todoObj)  
			},
			//勾选or取消勾选一个todo
			checkTodo(id){
				this.todos.forEach((todo) => {
					if(todo.id === id) todo.done = !todo.done
				})
			},
			//删除一个todo
			deleteTodo(id){
				this.todos = this.todos.filter( todo => todo.id !== id )
			},
			// 全选or取消全选 
			checkAllTodo(done){
				this.todos.forEach((todo) =>{
					todo.done = done
				})
			},
			// clear all 清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter( todo => !todo.done)
			}
		}
	}
</script>

<style>
	/*base*/
	body {
	background: #fff;
	}
	.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	}
	.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
	}
	.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
	}
	.btn:focus {
	outline: none;
	}
	.todo-container {
	width: 600px;
	margin: 0 auto;
	}
	.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	}

	/*footer*/
	.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
	}

	.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	}

	.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
	}

	.todo-footer button {
	float: right;
	margin-top: 5px;
	}

</style>
