<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <button @click="buttonClick" class="btn btn-primary">Click Me</button>
  </div>
</template>

<script>
import api from '@/services/api'

export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Testbed'
    }
  },
  methods: {
    async buttonClick () {
      let r = await api().get('api/test')
      this.msg = r.data.hello
    }
  }
}
</script>
