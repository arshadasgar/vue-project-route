<template>
  <div class="card">
    <div class="col-md-12">
      <h4>Add task</h4>
    </div>
    <div class="col-md-12">
      <input type="text" class="form-control" v-model="title" placeholder="Task title">
    </div>
    <div class="col-md-12">
      <button class="btn btn-raised btn-primary form-control" @click="$emit('addtask', title)">Add</button>
    </div>
  </div>
</template>
<script>
export default {
    data: function(){
        return {
            title: ''
        }
    }
}
</script>