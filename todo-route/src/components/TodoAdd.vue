<template>
  <div class="card">
    <div class="summary text-red" v-if="$v.$error">
      Form has errors
    </div>
    <form @submit.prevent="submit">
      <div class="col-md-12">
        <h4>Add task</h4>
      </div>
      <div class="col-md-12">
        <input type="text" class="form-control" v-model="title" placeholder="Task title">
        <span v-if="$v.title.$error">Atleast 4 characters</span>
      </div>
      <div class="col-md-12">
        <button type="submit" class="btn btn-raised btn-primary form-control">Add</button> 
        <!-- @click="$emit('addtask', title)" -->
      </div>
    </form>
  </div>
</template>
<script>

import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      title: null
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submit: function() {
      this.$v.$touch();
      if(this.$v.$error) 
        return
      this.$emit('addtask', this.title)
    }
  }
};
</script>