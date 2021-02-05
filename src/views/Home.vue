<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msgVal" />
    <button @click="toCountFun">跳转count页面</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue} from 'vue-class-component';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  data(){
    return {
      // msgVal: 'Welcome to Your Vue.js + TypeScript App',
      msgVal: '这是一个msg'
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    toCountFun(){
      this.$router.push('/count')
    }
  }
})

// @Component({
//     props: {
//         firstName: String,
//         lastName: String
//     },
//     components: {
//         HelloWorld,
//     }
// })

export default class Home extends Vue {}
</script>
