<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo"/>
            <List :todos="todos" :del-todo="delTodo"/>
            <Footer :todos="todos" :selectedAllTodo="selectedAllTodo" :deleteFinishedTodo="deleteFinishedTodo"/>
        </div>
    </div>
</template>

<script>
    //引入
    import Header from '../components/todo/Header'
    import List from '../components/todo/List'
    import Footer from '../components/todo/Footer'
    import '../assets/todo.css'

    export default {
        name: 'App',
        //註冊組件
        components: {
            Header,
            List,
            Footer
        },
        data(){
            return{
                todos:[
                    {title:'學習vue', finished:false},
                    {title:'學習React', finished:false},
                    {title:'學習vue的組件通信', finished:false},
                    {title:'搬一車的磚', finished:false},
                ]
            }
        },
        methods:{
            addTodo(todo){
                this.todos.unshift(todo)
            },
            delTodo(index){
                this.todos.splice(index,1)
            },
            selectedAllTodo(isCheck){
                this.todos.forEach(todo => todo.finished = isCheck)
            },
            deleteFinishedTodo(){
                this.todos = this.todos.filter(todo => ! todo.finished)
            }
        }
    }
</script>

<style>
    .todo-container{
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap{
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
