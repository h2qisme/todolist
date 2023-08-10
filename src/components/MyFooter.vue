<!--
 * @Author: h2qisme 874175299@qq.com
 * @Date: 2023-08-07 10:51:28
 * @LastEditors: h2qisme 874175299@qq.com
 * @LastEditTime: 2023-08-10 11:05:51
 * @FilePath: \vue_test\src\components\MyFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="todo-footer" v-show="total">
		<label>
		<input type="checkbox" v-model="isAll"/>
		</label>
		<span>
		<span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		props:['todos','checkAllTodo','clearAllTodo'],
		computed: {
			total(){
				return this.todos.length
			},
			doneTotal(){
				let i = 0
				this.todos.forEach((todo) => {
					if(todo.done)
					i++
				})
				return i
			},
			isAll:{
				get(){
					return this.doneTotal === this.total && this.total > 0
				},
				set(value){
					this.checkAllTodo(value)
				}
			},			
		},
		methods: {
			clearAll(){
				this.clearAllTodo()
			}
		}

	}
</script>

<style scoped>
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