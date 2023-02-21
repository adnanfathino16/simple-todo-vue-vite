<template>
  <div class="container" style="margin-top: 20px">
    <div class="card p-5">
      <h5 class="card-title">SIMPLE TODO APP</h5>
      <div class="row">
        <div class="col-10">
          <input v-model="todo" type="text" class="form-control" @keyup.enter="add">
        </div>
        <div class="col-2">
          <button class="btn btn-success" @click="add">ADD</button>
        </div>
      </div>
      <list :todos="list" @deleteTodo="deleteTodo" @doneTodo="doneTodo" />
      <br>
      <small>Total TODO: {{ totalTODO }}</small>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, computed } from 'vue'
import List from './components/List.vue'
export default {
  components: {
    List
  },
  setup() {
    const todo = ref('')
    const todos = reactive({
      list: []
    })

    onMounted(() => {
      const items = localStorage.getItem('todos')
      todos.list = items ? JSON.parse(items) : []
    })

    const totalTODO = computed(() => {
      return todos.list.length
    })

    const add = () => {
      todos.list.unshift({
        activity: todo.value,
        isDone: false
      })
      todo.value = ""
      saveToLocalStorage()
    }

    const deleteTodo = (TodoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if (index != TodoIndex) {
          return item
        }
      })
      saveToLocalStorage()
    }

    const doneTodo = (todoIndex) => {
      todos.list = todos.list.filter((item, index) => {
        if (index == todoIndex) {
          item.isDone = true;
        }
        return item;
      })
      saveToLocalStorage()
    }

    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos.list))
    }

    return { todo, ...toRefs(todos), totalTODO, add, deleteTodo, doneTodo }
  },
}
</script>
