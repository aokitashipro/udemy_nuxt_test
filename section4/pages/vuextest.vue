<template>
  <div>
    <v-btn @click="$store.commit('increment')">+</v-btn>
    {{ $store.state.counter }}<br>

  <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
 computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>