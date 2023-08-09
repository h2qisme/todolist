<!--
 * @Author: h2qisme 874175299@qq.com
 * @Date: 2023-08-07 10:51:28
 * @LastEditors: h2qisme 874175299@qq.com
 * @LastEditTime: 2023-08-09 15:37:28
 * @FilePath: \vue_test\src\components\MyHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	export default {
		name: 'MyHeader',
		props:['addTodo'],
		data() {
			return {
				title: '',
			}
		},
		methods: {
			add(){
				// 校验数据
				if (!this.title.trim()) return alert('输入不能为空');
				//将用户输入包装成一个todo对象
				const todoObj = {id:nanoid(),title:this.title,done:false}
				this.addTodo(todoObj)
				this.title = ''
			}
		}
	}
</script>

<style scoped>
	/*header*/
	.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
	}

	.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>