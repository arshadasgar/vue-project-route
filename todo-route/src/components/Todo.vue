<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Manage tasks</h3>
    </div>
    <div class="col-md-4">
      <TodoAdd @addtask="addTask" />
    </div>
    <div class="col-md-4">
      <TodoList :pendingtasks="pendingTasks" @markascomplete="markAsComplete"/>
    </div>
    <div class="col-md-4">
      <TodoCompletedList :completedtasks="completedTasks" @markaspending="markAsPending"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TodoList from "./TodoList";
import TodoCompletedList from "./TodoCompletedList";
import TodoAdd from "./TodoAdd";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoCompletedList,
    TodoAdd
  },
  data: function() {
    return {
      pendingTasks: [],
      completedTasks: []
    };
  },
  created: function() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks: function() {
      axios.get("http://api.test").then(resp => {
        this.pendingTasks = resp.data.pending;
      });
    },
    markAsComplete: function(task, index) {
      this.completedTasks.push(task);
      this.pendingTasks.splice(index, 1);
    },
    markAsPending: function(task, index) {
      this.pendingTasks.push(task);
      this.completedTasks.splice(index, 1);
    },
    addTask: function(task){
      let taskObj = {
        id: 101,
        title: task
      }
      this.pendingTasks.push(taskObj)
    }
  }
};
</script>