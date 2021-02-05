<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    }
  }
})
export default class Counter extends Vue {}
</script>
