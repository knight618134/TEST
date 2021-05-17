<template>
  <li @mouseenter="dealShow(true)" @mouseleave="dealShow(false)"
  :style="{backgroundColor:bgColor}">
    <label>
      <input type="checkbox" v-model="todo.finished"/>
      <span>{{todo.title}}</span>
    </label>
    <button v-show="isShowDelBtn" class="btn btn-warning" @click="delItem">删除</button>
  </li>
</template>

<script>
  export default {
    name: "Item",
    data(){
      return{
        isShowDelBtn:false,
        bgColor: '#fff'
      }
    },
    props:{
      todo:Object,
      index:Number,
      delTodo:Function
    },
    methods:{
      dealShow(isShow){
        this.isShowDelBtn = isShow
        this.bgColor = isShow ? '#DCDCDC':'#fff'
      },
      delItem(){
        if(window.confirm(`確定刪除 ${this.todo.title} 嗎 ?`)){
          this.delTodo(this.index)
        }
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button{
    padding: 4px 10px;
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before{
    content: initial;
  }

  li:last-child{
    border-bottom: none;
  }
</style>