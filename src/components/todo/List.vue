<template>
    <ul class="todo-main">
        <Item v-for="(todo, index) in todos" :todo="todo" :key="index" :index="index" :del-todo="delTodo"/>
    </ul>
</template>

<script>
    import Item from './Item'
    export default {
        name: "List",
        props:{
            todos:Array,
            delTodo:Function
        },
        components:{
            Item
        }
    }
</script>

<style scoped>
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-inline-start: 3px;
    }
</style>
